from app import db
from models.team_model import Team
from flask import jsonify, request, redirect, url_for

""" This class handles the logic and operations related to the teams of the application.
    It provides methods to retrieve, create, update, and delete teams. """
class TeamController():
    
    # Retrieve all teams from the database
    @staticmethod
    def get_all_teams():
        teams = Team.query.all()
        team_dict = [team.to_dict() for team in teams]
        return team_dict

    # Retrieve a specific team by ID from the database
    @staticmethod
    def show_team(id):
        team = Team.query.get(id)
        if not team:
            return jsonify({'message': 'Team not found'}), 404
        return jsonify({'team': team.to_dict()}), 200

    # Retrieve the name from the request form
    @staticmethod
    def create_team(name):

        new_team = Team(name=name)

        db.session.add(new_team)
        db.session.commit()

    # Retrieve the team to update by ID from the database
    @staticmethod
    def update_team(id):
        team = Team.query.get(id)
        if not team:
            return jsonify({'message': 'Team not found'}), 404

        name = request.form.get('name')

        team.name = name

        db.session.commit()

        return redirect(url_for('teams_index'))

    # Retrieve the team to delete by ID from the database
    @staticmethod
    def delete_team(id):
        team = Team.query.get(id)
        if not team:
            return jsonify({'message': 'Team not found'}), 404
        db.session.delete(team)
        db.session.commit()
        return '', 204

# Create an instance of the TeamController class
team_controller = TeamController()