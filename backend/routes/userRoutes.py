from flask import Blueprint, request, jsonify
from backend.models.userModel import db, User

user_bp = Blueprint('user', __name__)


@user_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    new_user = User(
        name=data['name'],
        email=data['email'],
        password=data['password'],
        role=data['role']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'})
