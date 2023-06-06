from flask import Blueprint, jsonify, request
from backend.config import Config
from backend.controllers.AnswerController import AnswerController

# Create a Blueprint for the answer API
answer_api = Blueprint('answer_api', __name__, url_prefix=Config.answers_api_prefix)