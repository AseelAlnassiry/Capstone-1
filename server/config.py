from dotenv import load_dotenv
from os import environ

load_dotenv()


class ApplicationConfig:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False
    SQLALCHEMY_DATABASE_URI = environ["DATABASE_URI"]
    SECRET_KEY = environ["SECRET_KEY"]
