from flask import Blueprint, jsonify, request
from backend.config import Config
from backend.controllers.MemberController import member_controller

# Create a Blueprint for the member API
member_api = Blueprint('member_api', __name__, url_prefix=Config.members_api_prefix)

# Endpoint for testing the member API
@member_api.route("/test", methods=['GET'])
def test_member_api():
    return "Hello Members"

# Endpoint to retrieve all Members
@member_api.route("", methods=['GET'])
def show_all_members():
    return jsonify(member_controller.get_all_members())

# Endpoint to create a new member
@member_api.route('', methods=['POST'])
def create_member():

    data = request.get_json()
    name = data['name']
    email = data['email']
    department = data['department']

    member_controller.create_member(name=name, email=email, department=department)
    member_controller.add_member_to_team(email=email, department=department)

    return jsonify({
        "msg" : "successfully created member"
    })

# Endpoint to retrieve a specific member by ID
@member_api.route('/<id>', methods=['GET'])
def show_member(id):
    return jsonify(member_controller.show_member(id))

# Endpoint to update a specific member by ID
@member_api.route('/<id>', methods=['POST'])
def update_member(id):
    data = request.get_json()
    return jsonify(member_controller.update_member(id, data))

# Endpoint to delete a specific member by ID
@member_api.route('/<id>', methods=['DELETE'])
def delete_member(id):
    return jsonify(member_controller.delete_member(id))