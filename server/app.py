from os import abort
from flask import Flask, request, jsonify
from config import ApplicationConfig
from models import User, Review, db
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config.from_object(ApplicationConfig)
app.app_context().push()

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
    email = request.json["email"]
    unhashed_password = request.json["password"]
    if not email or not unhashed_password:
        return jsonify({"message": "email or password missing"}), 409
    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.check_password_hash(user.password, unhashed_password):
        return (
            jsonify({"error": "unable to authorize based on provided information"}),
            401,
        )
    else:
        return jsonify({"email": user.email, "id": user.id}), 200
