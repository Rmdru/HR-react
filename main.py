import os

from flask import Flask
from backend.routes.userRoutes import user_bp
from flask_cors import CORS

from backend.models.userModel import db

app = Flask(__name__)
CORS(app)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(app.root_path, 'backend', 'database', 'feedback.db')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(user_bp, url_prefix='/user')

# Secret key for the session
app.secret_key = '1335eb3948fb7b64a029aa29'

if __name__ == '__main__':
    app.run(debug=True)
