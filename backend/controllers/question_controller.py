from app import db
from models.question_model import Questions
from flask import jsonify, request

""" This class handles the logic and operations related to the questions of the application.
    It provides methods to retrieve, create, update, and delete questions. """
class QuestionController:

    # Retrieve all questions from the database
    @staticmethod
    def get_all_questions():
        questions = Questions.query.all()
        question_dict = [question.to_dict() for question in questions]
        return question_dict

    # Retrieve a specific question by ID from the database
    @staticmethod
    def show_question(id):
        question = Questions.query.get(id)
        if not question:
            return jsonify({'message': 'Question not found'}), 404
        return jsonify({'question': question.to_dict()}), 200

    # Create a new question
    @staticmethod
    def create_question(text, question_type):
        new_question = Questions(text=text, type=question_type)
        db.session.add(new_question)
        db.session.commit()

    # Update a question
    @staticmethod
    def update_question(id, text, question_type):
        question = Questions.query.get(id)
        if not question:
            return jsonify({'message': 'Question not found'}), 404

        question.text = text
        question.type = question_type

        db.session.commit()

    # Delete a question
    @staticmethod
    def delete_question(id):
        question = Questions.query.get(id)
        if not question:
            return jsonify({'message': 'Question not found'}), 404

        db.session.delete(question)
        db.session.commit()

        return '', 204

# Create an instance of the QuestionController class
question_controller = QuestionController()
