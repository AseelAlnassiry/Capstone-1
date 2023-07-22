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
    email = request.json["email"]
    unhashed_password = request.json["password"]
    if not email or not unhashed_password:
        return jsonify({"message": "email or password missing"}), 404
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "email already exists in system"}), 409
    new_user = User(
        email=email,
        password=bcrypt.generate_password_hash(unhashed_password).decode("utf8"),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"email": new_user.email, "id": new_user.id})


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
        user_data = {
            "id": user.id,
            "token": jwt_token,
            "email": user.email,
            "profile_image": user.profile_image,
        }
        return jsonify(user=user_data), 200
