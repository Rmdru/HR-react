from app import db
from models.user_model import User
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
    def create_member():

        name = request.form.get('name')

        new_user = User(name=name)

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('members_index'))

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

# Create an instance of the MemberController class
member_controller = MemberController()


