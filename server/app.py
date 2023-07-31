from os import abort
from flask import Flask, request, jsonify
from config import ApplicationConfig
from models import User, Review, db
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity,
    JWTManager,
    verify_jwt_in_request,
)

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config.from_object(ApplicationConfig)
app.app_context().push()
jwt = JWTManager(app)

bcrypt = Bcrypt(app)

db.init_app(app)


@app.post("/register")
@cross_origin(supports_credentials=True)
def register_user():
    email = request.json.get("email", None)
    unhashed_password = request.json.get("password", None)
    display_name = request.json.get("displayName", None)
    if not email or not unhashed_password:
        return jsonify({"message": "email or password missing"}), 404
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "email already exists in system"}), 409
    else:
        new_user = User(
            email=email,
            password=bcrypt.generate_password_hash(unhashed_password).decode("utf8"),
            display_name=display_name,
        )
        db.session.add(new_user)
        db.session.commit()
        jwt_token = create_access_token(identity=email)
        user_data = {
            "id": new_user.id,
            "token": jwt_token,
            "email": new_user.email,
            "displayName": new_user.display_name,
            "profileImage": new_user.profile_image,
            "saved": new_user.saved,
            "reviews": len(new_user.reviews),
        }
        return jsonify(user=user_data), 200


@app.post("/auth")
@cross_origin(supports_credentials=True)
def auth_user():
    req_email = request.json.get("email", None)
    req_password = request.json.get("password", None)
    user = User.query.filter_by(email=req_email).first()
    if not user or not bcrypt.check_password_hash(user.password, req_password):
        return (
            jsonify(error="unable to authorize based on provided request data"),
            401,
        )
    else:
        jwt_token = create_access_token(identity=req_email)
        print(len(user.reviews))
        user_data = {
            "id": user.id,
            "token": jwt_token,
            "email": user.email,
            "displayName": user.display_name,
            "profileImage": user.profile_image,
            "saved": user.saved,
            "reviews": len(user.reviews),
        }
        return jsonify(user=user_data), 200


@app.put("/auth")
@cross_origin(supports_credentials=True)
@jwt_required()
def update_user():
    email = request.json.get("email", None)
    image = request.json.get("userImage", None)
    current_user = get_jwt_identity()
    if email != current_user:
        return (jsonify(error="unable to autorize based on provided token"), 401)
    else:
        user = User.query.filter_by(email=email).first()
        user.profile_image = image
        db.session.add(user)
        db.session.commit()
        return jsonify(image=user.profile_image), 200


@app.post("/saved")
@cross_origin(supports_credentials=True)
@jwt_required()
def update_saved():
    email = request.json.get("email", None)
    show_id = request.json.get("show_id", None)
    current_user = get_jwt_identity()
    if email != current_user:
        return (jsonify(error="unable to autorize based on provided token"), 401)
    else:
        user = User.query.filter_by(email=email).first()
        saved_list = user.saved
        if show_id in user.saved:
            saved_list.remove(show_id)
        else:
            saved_list.append(show_id)
        user.saved = saved_list
        db.session.add(user)
        db.session.commit()
        print(user.saved)
        return jsonify(saved=user.saved), 200


@app.post("/reviews")
@cross_origin(supports_credentials=True)
@jwt_required()
def create_review():
    show_id = request.json.get("show_id", None)
    rating = request.json.get("rating", None)
    content = request.json.get("content", None)
    email = request.json.get("email", None)
    if not show_id or not email or not rating:
        return (jsonify(error="needed information not provided"), 404)
    user = User.query.filter_by(email=email).first()
    review = Review(
        anime_id=show_id, rating=int(rating), author_id=user.id, content=content
    )
    db.session.add(review)
    db.session.commit()
    return jsonify(message="review added"), 200


@app.get("/reviews/<show_id>")
@cross_origin(supports_credentials=True)
def get_reviews(show_id):
    print(show_id)
    reviews = Review.query.filter_by(anime_id=show_id).all()
    revs = []
    for review in reviews:
        author = User.query.filter_by(id=review.author_id).first()
        revs.append(
            {
                "reviewId": review.id,
                "image": author.profile_image,
                "displayName": author.display_name,
                "rating": review.rating,
                "content": review.content,
            }
        )
    print(revs)
    # return jsonify(reviews=reviews), 200
    return jsonify(reviews=revs)
