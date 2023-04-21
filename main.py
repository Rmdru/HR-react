from flask import Flask, jsonify, request
from flask_cors import CORS

LISTEN_ALL = "0.0.0.0"
FLASK_IP = LISTEN_ALL
FLASK_PORT = 5000
FLASK_DEBUG = True

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return jsonify({"message": "Hello, world!"})


if __name__ == "__main__":
    app.run(host=FLASK_IP, port=FLASK_PORT, debug=FLASK_DEBUG)