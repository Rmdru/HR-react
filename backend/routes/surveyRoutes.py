from backend.controllers.surveyController import SurveyController

def setup_survey_routes(app):
    @app.route('/api/surveys', methods=['GET'])
    def get_surveys():
        return SurveyController.get_all_surveys()


    @app.route('/api/surveys/', methods=['POST'])
    def create_survey():
        return SurveyController.store()