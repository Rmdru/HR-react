from flask import Blueprint, jsonify, request
from config import Config
from controllers.team_controller import TeamController

# Create a Blueprint for the team API
team_api = Blueprint('team_api', __name__, url_prefix=Config.teams_api_prefix)

# Endpoint for testing the team API
@team_api.route("/test", methods=['GET'])
def test_team_api():
    return "Hello teams"

# Endpoint to retrieve all teams
@team_api.route("/all", methods=['GET'])
def show_all_teams():
    return jsonify(TeamController.get_all_teams())

# Endpoint to create a new team
@team_api.route('/create', methods=['POST'])
def create_team():
    data = request.get_json()
    return jsonify(TeamController.create_team(data))

# Endpoint to retrieve a specific team by ID
@team_api.route('/<id>', methods=['GET'])
def show_team(id):
    return jsonify(TeamController.show_team(id))

# Endpoint to update a specific team by ID
@team_api.route('/<id>', methods=['POST'])
def update_team(id):
    data = request.get_json()
    return jsonify(TeamController.update_team(id, data))

# Endpoint to delete a specific team by ID
@team_api.route('/<id>', methods=['DELETE'])
def delete_team(id):
    return jsonify(TeamController.delete_team(id))
