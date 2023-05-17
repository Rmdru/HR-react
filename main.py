from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os.path

LISTEN_ALL = "0.0.0.0"
FLASK_IP = LISTEN_ALL
FLASK_PORT = 5000
FLASK_DEBUG = True

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(app.root_path, 'backend', 'database', 'feedback.db')
CORS(app)

db = SQLAlchemy(app=app)

# Create the tables
# import backend.models.user_team_model


# Import api routes
# import backend.routes.member_routes
import backend.routes.team_routes
from backend.routes.member_routes import member_api

app.register_blueprint(member_api, url_prefix='/api/member')

@app.route("/")
def hello():
    return jsonify({"message": "Hello, world!"})


if __name__ == "__main__":
    app.run(host=FLASK_IP, port=FLASK_PORT, debug=FLASK_DEBUG)