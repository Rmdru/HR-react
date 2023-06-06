from flask import Flask
from extensions import migrate, db
from config import Config
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)

# Initialize the CORS extension and database extension for the Flask application
db.init_app(app)
migrate.init_app(app, db)
CORS(app)

# Shell context processor for Flask shell
@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db)

# Main entry point of the application
if __name__ == "__main__":
    # Import the necessary models and routes
    # from models.TeamModel import Team
    # from models.UserModel import User
    from models.AnswerModel import Answer
    # from models.SurveyModel import Surveys
    # from models.QuestionModel import Question
    # from models.UserTeamModel import UserTeam
    # from routes.TeamRoutes import team_api
    # from routes.QuestionRoutes import question_api

    with app.app_context():
        # Apply any necessary database migrations
        # db.drop_all()
        db.create_all()

    # Import the member_api blueprint and team_api blueprint from the routes package
    from routes.MemberRoutes import member_api
    from routes.SurveyRoutes import survey_api
    from routes.TeamRoutes import team_api
    from routes.QuestionRoutes import question_api

    # Register the blueprints
    blueprint_name = [member_api, survey_api, team_api, question_api]
    for name in blueprint_name:
        app.register_blueprint(name)

    # Run the Flask application on the specified host, port, and with debug mode enabled or disabled
    app.run(host=Config.FLASK_IP, port=Config.FLASK_PORT, debug=Config.FLASK_DEBUG)
