from main import jsonify, db, request, redirect, url_for, flash
from backend.models.teamModel import Team


class TeamController():
   
    @staticmethod
    def get_all_teams():
        teams = Team.query.all()
        team_dict = [team.to_dict() for team in teams]
        return team_dict

    @staticmethod
    def show_team(id):
        team = Team.query.get(id)
        if not team:
            return jsonify({'message': 'Team not found'}), 404
        return jsonify({'team': team.to_dict()}), 200

    @staticmethod
    def create_team():
        name = request.form.get('name')

        new_team = Team(name=name)

        db.session.add(new_team)
        db.session.commit()

        return redirect(url_for('teams_index'))

    @staticmethod
    def update_team(id):
        team = Team.query.get(id)
        if not team:
            return jsonify({'message': 'Team not found'}), 404

        name = request.form.get('name')

        team.name = name

        db.session.commit()

        return redirect(url_for('teams_index'))

    @staticmethod
    def delete_team(id):
        team = Team.query.get(id)
        if not team:
            return jsonify({'message': 'Team not found'}), 404
        db.session.delete(team)
        db.session.commit()
        return '', 204
