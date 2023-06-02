from __main__ import db, app

# Define the Survey model
class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    teams = db.relationship('Team', secondary='survey_team', backref='surveys')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'teams': [team.to_dict() for team in self.teams]
        }
