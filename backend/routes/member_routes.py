from flask import render_template, jsonify
from backend.controllers.member_controller import MemberController
from __main__ import app

@app.route("/api/members/", methods=['GET'])
def members_index():
    return MemberController.get_all_users()

@app.route('/api/members/', methods=['POST'])
def create_member():
    return MemberController.create_user()

@app.route('/api/members/<id>', methods=['GET'])
def show_member(id):
    return MemberController.show_user(id)

@app.route('/api/members/<id>', methods=['POST'])
def update_member(id):
    return MemberController.update_user(id)

@app.route('/api/members/<id>', methods=['DELETE'])
def delete_member(id):
    return MemberController.delete_user(id)

