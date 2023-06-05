from flask import Blueprint, jsonify, request
from backend.config import Config
from backend.controllers.SurveyController import SurveyController

# Create a Blueprint for the survey API
survey_api = Blueprint('survey_api', __name__, url_prefix=Config.surveys_api_prefix)

# Endpoint for testing the member API
@survey_api.route("/test", methods=['GET'])
def test_survey_api():
    return "Hello Members"

# Endpoint to retrieve all surveys
@survey_api.route("", methods=['GET'])
def show_all_surveys():
    return SurveyController.get_all_surveys()

# Endpoint to create a new survey
@survey_api.route('', methods=['POST'])
def create_survey():
    return SurveyController.store()

# Endpoint to retrieve a specific survey by ID
@survey_api.route('/<id>', methods=['GET'])
def show_survey(id):
    return 'show survey'

# Endpoint to update a specific survey by ID
@survey_api.route('/<id>', methods=['POST'])
def update_surveyr(id):
    return 'update survey'

# Endpoint to delete a specific survey by ID
@survey_api.route('/<id>', methods=['DELETE'])
def delete_survey(id):
    return 'delete survey'