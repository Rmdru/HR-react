from main import db
from sqlalchemy.orm import relationship
from backend.models.userModel import User
from backend.models.team_model import Team

# Define the pivot table
class UserTeam(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'))

    users = relationship('User', backref=db.backref('users', lazy=True))
    teams = relationship('Team', backref=db.backref('users_teams', lazy=True))

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'team_id': self.team_id,
        }

# Create the tables
with app.app_context():
    db.create_all()