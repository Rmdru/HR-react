from __main__ import db, app
from backend.models.teamModel import Team

# Define the Survey model
class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'), nullable=False)

    team = db.relationship('Team', backref=db.backref('surveys', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'team_id': self.team_id,
            'team': {
                'id': self.team.id,
                'name': self.team.name
            } if self.team else None
        }

# Create the tables
with app.app_context():
    db.create_all()