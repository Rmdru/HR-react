from backend.models.teamModel import Team
from flask import jsonify

class TeamController():
    @staticmethod
    def get_all_teams():
        teams = Team.query.all()
        return jsonify([team.to_dict() for team in teams])