from backend.app import db
from backend.models.QuestionModel import Question
from flask import jsonify, request

""" This class handles the logic and operations related to the questions of the application.
    It provides methods to retrieve, create, update, and delete questions. """


class QuestionController:

    # Retrieve all questions from the database
    @staticmethod
    def get_all_questions():
        questions = Question.query.all()
        question_dict = [question.to_dict() for question in questions]
        return question_dict

    # Retrieve a specific question by ID from the database
    @staticmethod
    def show_question(id):
        question = Question.query.get(id)
        if not question:
            return jsonify({'message': 'Question not found'}), 404
        return jsonify({'question': question.to_dict()}), 200

    # Create a new question
    @staticmethod
    def store():

        # Retrieve the Question data from the request
        question_data = request.json
        survey_id = request.args.get('surveyId[surveyId]')

        print(question_data, survey_id)
        for question in question_data:
            if question['question'] == "":
                return jsonify({'message': 'Question cannot be empty'}), 400

            # Convert the options array to a string
            options = ",".join(question.get('options', []))

            question['type'] = 1 if question['type'] == 'moreOptions' else 0

            # Create a new Question instance with the data
            question = Question(text=question['question'], survey_id=survey_id, type=question['type'], options=options)

            # Save the question to the database
            db.session.add(question)
            db.session.commit()

        return jsonify({'message': 'Questions stored successfully'}), 200

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
