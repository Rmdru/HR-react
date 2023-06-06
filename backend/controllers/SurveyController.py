from backend.models.SurveyModel import Survey
from backend.models.TeamModel import Team
from backend.models.SurveyTeamModel import SurveyTeam
from flask import jsonify, request
from backend.app import db


class SurveyController():
    @staticmethod
    def get_all_surveys():
        surveys = Survey.query.all()
        return jsonify([survey.to_dict() for survey in surveys])

    @staticmethod
    def store():
        # Retrieve the Survey data from the request
        survey_data = request.json

        # Input validation
        if 'name' not in survey_data or 'teams' not in survey_data:
            return jsonify({'error': 'Invalid Survey data. Missing required fields.'}), 400

        # Create the Survey in the database
        survey = Survey(name=survey_data['name'])
        db.session.add(survey)
        db.session.flush()  # Flush the session to generate the survey ID

        for team_id in survey_data['teams']:
            team = Team.query.get(team_id)
            if team:
                survey_team = SurveyTeam(survey_id=survey.id, team_id=team.id)
                db.session.add(survey_team)

        db.session.commit()

        created_survey = {
            'id': survey.id,
            'name': survey.name,
            'teams': [team.to_dict() for team in survey.teams]
            # Include any other relevant Survey data
        }

        return jsonify(created_survey), 201  # 201 = Created
