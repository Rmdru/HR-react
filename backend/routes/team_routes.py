from flask import render_template, jsonify
from backend.controllers.team_controller import TeamController
from __main__ import app

@app.route("/api/teams/", methods=['GET'])
def teams_index():
    return TeamController.get_all_teams()

@app.route('/api/teams/', methods=['POST'])
def create_team():
    return TeamController.create_team()

@app.route('/api/teams/<id>', methods=['GET'])
def show_team(id):
    return TeamController.show_team(id)

@app.route('/api/teams/<id>', methods=['POST'])
def update_team(id):
    return TeamController.update_team(id)

@app.route('/api/teams/<id>', methods=['DELETE'])
def delete_team(id):
    return TeamController.delete_team(id)

