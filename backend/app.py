from flask import Flask
from extensions import cors, migrate, db
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

# Shell context processor for Flask shell
@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db)

# Main entry point of the application
if __name__ == "__main__":
    
    # Initialize the CORS extension and database extension for the Flask application
    cors.init_app(app)
    db.init_app(app)

    # Import the Team model and User model and UserTeam model from the models package
    from models.team_model import Team
    from models.user_model import User
    from models.user_team_model import UserTeam

    # Execute the following code within the application context when you want to apply table changes
    # with app.app_context():
        # Drop all database tables
    #    db.drop_all()
        # Create all database tables based on the defined models
    #    db.create_all()

    # Initialize the database migration extension for the Flask application
    migrate.init_app(app, db)

    # Import the member_api blueprint and team_api blueprint from the routes package
    from routes.member_routes import member_api
    from routes.team_routes import team_api

    # Register the blueprints
    blueprint_name = [member_api, team_api]
    for name in blueprint_name:
        app.register_blueprint(name)
    
    # Run the Flask application on the specified host, port, and with debug mode enabled or disabled
    app.run(host=Config.FLASK_IP, port=Config.FLASK_PORT, debug=Config.FLASK_DEBUG)
