from app import db
from models.user_model import User
from models.team_model import Team
from models.user_team_model import UserTeam
from flask import jsonify, request, redirect, url_for

""" This class handles the logic and operations related to the members of the application.
    It provides methods to retrieve, create, update, and delete members. """
class MemberController():
    
    # Retrieve all users from the database
    @staticmethod
    def get_all_members():
        users = User.query.all()
        user_dict = [user.to_dict() for user in users]
        return user_dict

    # Retrieve a specific user by ID from the database
    @staticmethod
    def show_member(id):
        user = User.query.get(id)
        if not user:
            return jsonify({'message': 'Member not found'}), 404
        return jsonify({'member': user.to_dict()}), 200

    # Retrieve the name from the request form
    @staticmethod
    def create_member(name, email, department):

        new_user = User(name=name, email=email, password=None, admin_role=False)

        db.session.add(new_user)
        db.session.commit()

    # Retrieve the user to update by ID from the database
    @staticmethod
    def update_member(id):
        user = User.query.get(id)
        if not user:
            return jsonify({'message': 'Member not found'}), 404

        name = request.form.get('name')

        user.name = name

        db.session.commit()

        return redirect(url_for('members_index'))

    # Retrieve the user to delete by ID from the database
    @staticmethod
    def delete_member(id):
        user = User.query.get(id)
        if not user:
            return jsonify({'message': 'Member not found'}), 404
        db.session.delete(user)
        db.session.commit()
        return '', 204

    @staticmethod
    def add_member_to_team(email, department):

        # filter user id by email
        user = User.query.filter_by(email=email).one()
        if not user:
            return jsonify({'message': 'Member not found'}), 404
        
        # filter team id by email
        team = Team.query.filter_by(name=department).one()
        if not team:
            return jsonify({'message': 'Team not found'}), 404
        
        # add user to team
        new_user_team = UserTeam(user_id=user.id, team_id=team.id)

        db.session.add(new_user_team)
        db.session.commit()

# Create an instance of the MemberController class
member_controller = MemberController()


