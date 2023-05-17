from backend.models.surveyModel import Survey
from __main__ import jsonify, request, db

class SurveyController():
    @staticmethod
    def get_all_surveys():
        surveys = Survey.query.all()
        return jsonify([survey.to_dict() for survey in surveys])

    @staticmethod
    def store():
        # Retrieve the Survey data from the request
        survey_data = request.json
        print(survey_data)
        # Input validation
        if 'name' not in survey_data or 'teams' not in survey_data:
            return jsonify({'error': 'Invalid Survey data. Missing required fields.'}), 400

        # Create the Survey in the database
        survey = Survey(name=survey_data['name'], team_id=survey_data['teams'])
        db.session.add(survey)
        db.session.commit()

        created_survey = {
            'id': survey.id,
            'name': survey.name,
            'team': survey.team
            # Include any other relevant Survey data
        }

        return jsonify(created_survey), 201 # 201 = Created