from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from os import environ
from datetime import datetime


def get_uuid():
    return uuid4().hex


db = SQLAlchemy()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.String(), primary_key=True, unique=True, default=get_uuid)
    display_name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    profile_image = db.Column(db.Text, default=environ["DEFAULT_IMAGE"])
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    reviews = db.relationship("Review", backref="users")
    saved = db.Column(db.ARRAY(db.String()))


class Review(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.String(), primary_key=True, unique=True, default=get_uuid)
    anime_id = db.Column(db.String(), nullable=False)
    author_id = db.Column(db.String(), db.ForeignKey("users.id"))
    rating = db.Column(db.Integer, nullable=False)
    content = db.Column(db.Text)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
