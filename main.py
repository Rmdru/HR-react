from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager, login_user, login_required, current_user, logout_user
import os.path

LISTEN_ALL = "0.0.0.0"
FLASK_IP = LISTEN_ALL
FLASK_PORT = 5000
FLASK_DEBUG = True

app = Flask(__name__)
CORS(app)


db = SQLAlchemy()
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(app.root_path, 'backend', 'database', 'feedback.db')
db.init_app(app)


# Create the tables
import backend.models.userModel



@app.route("/")
def hello():
    return jsonify({"message": "Hello, world!"})


if __name__ == "__main__":
    app.run(host=FLASK_IP, port=FLASK_PORT, debug=FLASK_DEBUG)