from flask import Blueprint, jsonify, request
from config import Config
from controllers.member_controller import MemberController

# Create a Blueprint for the member API
member_api = Blueprint('member_api', __name__, url_prefix=Config.members_api_prefix)

# Endpoint for testing the member API
@member_api.route("/test", methods=['GET'])
def test_member_api():
    return "Hello members"

# Endpoint to retrieve all members
@member_api.route("/all", methods=['GET'])
def show_all_members():
    return jsonify(MemberController.get_all_members())

# Endpoint to create a new member
@member_api.route('/create', methods=['POST'])
def create_member():
    data = request.get_json()
    return jsonify(MemberController.create_member(data))

# Endpoint to retrieve a specific member by ID
@member_api.route('/<id>', methods=['GET'])
def show_member(id):
    return jsonify(MemberController.show_member(id))

# Endpoint to update a specific member by ID
@member_api.route('/<id>', methods=['POST'])
def update_member(id):
    data = request.get_json()
    return jsonify(MemberController.update_member(id, data))

# Endpoint to delete a specific member by ID
@member_api.route('/<id>', methods=['DELETE'])
def delete_member(id):
    return jsonify(MemberController.delete_member(id))