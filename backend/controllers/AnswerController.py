from backend.models.SurveyModel import Survey
from backend.models.AnswerModel import Answer
from backend.models.SurveyTeamModel import SurveyTeam
from flask import jsonify, request
from backend.app import db

class AnswerController():

    # Retrieve all answers from the database
    @staticmethod
    def get_all_answers():
        answers = Answer.query.all()
        return jsonify([answer.to_dict() for answer in answers])


    # Retrieve a specific answers from the database by survey token
    def get_answers_by_survey_token(survey_token):
        survey = Survey.query.filter_by(token=survey_token).first()
        answers = Answer.query.filter_by(survey_id=survey.id).all()
        return jsonify([answer.to_dict() for answer in answers])