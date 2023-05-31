from flask import Blueprint, jsonify, request
from config import Config
from controllers.question_controller import question_controller

# Create a Blueprint for the question API
question_api = Blueprint('question_api', __name__, url_prefix=Config.questions_api_prefix)

# Endpoint for testing the question API
@question_api.route("/test", methods=['GET'])
def test_question_api():
    return "Hello questions"

# Endpoint to retrieve all questions
@question_api.route("/all", methods=['GET'])
def get_all_questions():
    return jsonify(question_controller.get_all_questions())

# Endpoint to retrieve a specific question by ID
@question_api.route("/<id>", methods=['GET'])
def get_question(id):
    return jsonify(question_controller.show_question(id))

# Endpoint to create a new question
@question_api.route('/create', methods=['POST'])
def create_question():
    data = request.get_json()
    questionText = data.get('questionText')
    questionType = data.get('questionType')

    question_controller.create_question(questionText, questionType)

    return jsonify({'message': 'Question created successfully'})

# Endpoint to update a specific question by ID
@question_api.route("/<id>", methods=['PUT'])
def update_question(id):
    data = request.get_json()
    text = data.get('text')
    question_type = data.get('type')

    question_controller.update_question(id, text, question_type)

    return jsonify({'message': 'Question updated successfully'})

# Endpoint to delete a specific question by ID
@question_api.route("/<id>", methods=['DELETE'])
def delete_question(id):
    question_controller.delete_question(id)

    return jsonify({'message': 'Question deleted successfully'})
