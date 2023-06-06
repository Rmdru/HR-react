from __main__ import db, app

# Define the Surveys model
class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    anonymous = db.Column(db.Boolean, nullable=False)

    teams = db.relationship('Team', secondary='survey_team', backref='surveys')
    questions = db.relationship('Question', backref='survey')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'anonymous': self.anonymous,
            'teams': [team.to_dict() for team in self.teams],
            'questions': [question.to_dict() for question in self.questions]
        }
