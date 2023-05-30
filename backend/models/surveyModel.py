from __main__ import db, app
from backend.models.surveyTeamModel import SurveyTeam

# Define the Survey model
class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    teams = db.relationship('Team', secondary='survey_team', backref=db.backref('surveys', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'teams': [{
                'id': team.id,
                'name': team.name
            } for team in self.teams] if self.teams else []
        }


# Create the tables
with app.app_context():
    db.create_all()