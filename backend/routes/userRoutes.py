from flask import Blueprint, request, jsonify, session
from backend.models.userModel import db, User
from werkzeug.security import generate_password_hash, check_password_hash

user_bp = Blueprint('user', __name__)


# Signup route
@user_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()

    hashed_password = generate_password_hash(data['password'], method='sha256')

    new_user = User(name=data['name'], email=data['email'], password=hashed_password, role=data['role'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully!'})


# Login route
@user_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']
    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        session['user_id'] = user.id  # Store the user ID in the session
        return jsonify({'message': 'Login successful!'})
    else:
        return jsonify({'message': 'Invalid email or password'}), 401


# Logout route
@user_bp.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)  # Remove the user ID from the session
    return jsonify({'message': 'Logout successful!'})
