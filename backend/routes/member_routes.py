from flask import render_template, jsonify, Blueprint
from backend.controllers.member_controller import member_controller
from __main__ import app

member_api = Blueprint('member_api', __name__)

@member_api.route("/test", methods=['GET'])
def members_test():
    return "Hello members"

@member_api.route("/all", methods=['GET'])
def members_index():
    return member_controller.get_all_members()

@member_api.route('/create', methods=['POST'])
def create_member():
    return member_controller.create_member()

@member_api.route('/<id>', methods=['GET'])
def show_member(id):
    return member_controller.show_user(id)

@member_api.route('/<id>', methods=['POST'])
def update_member(id):
    return member_controller.update_user(id)

@member_api.route('/<id>', methods=['DELETE'])
def delete_member(id):
    return member_controller.delete_user(id)

