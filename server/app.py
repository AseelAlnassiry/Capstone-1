from os import abort
from flask import Flask, request, jsonify
from config import ApplicationConfig
from models import User, Review, db
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
app.app_context().push()

bcrypt = Bcrypt(app)

db.init_app(app)
db.drop_all()
db.create_all()


@app.post("/register")
def register_user():
    email = request.json["email"]
    unhashed_password = request.json["password"]
    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"message": "cant have shit in sammamish..."})
    new_user = User(
        email=email,
        password=bcrypt.generate_password_hash(unhashed_password).decode("utf8"),
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"email": new_user.email, "id": new_user.id})
