from main import jsonify, db, request, redirect, url_for, flash
from backend.models.userModel import User


class MemberController():
   
    @staticmethod
    def get_all_members():
        users = User.query.all()
        user_dict = [user.to_dict() for user in users]
        return user_dict

    @staticmethod
    def show_member(id):
        user = User.query.get(id)
        if not user:
            return jsonify({'message': 'Member not found'}), 404
        return jsonify({'member': user.to_dict()}), 200

    @staticmethod
    def create_member():
        name = request.form.get('name')

        new_user = User(name=name)

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('members_index'))

    @staticmethod
    def update_member(id):
        user = User.query.get(id)
        if not user:
            return jsonify({'message': 'Member not found'}), 404

        name = request.form.get('name')

        user.name = name

        db.session.commit()

        return redirect(url_for('members_index'))

    @staticmethod
    def delete_member(id):
        user = User.query.get(id)
        if not user:
            return jsonify({'message': 'Member not found'}), 404
        db.session.delete(user)
        db.session.commit()
        return '', 204
