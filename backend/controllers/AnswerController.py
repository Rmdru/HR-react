from backend.models.SurveyModel import Survey
from backend.models.AnswerModel import Team
from backend.models.SurveyTeamModel import SurveyTeam
from flask import jsonify, request
from backend.app import db

class AnswerController():

    # Retrieve all answers from the database
    @staticmethod
    def get_all_answers():
        answers = Answer.query.all()
        return jsonify([answer.to_dict() for answer in answers])