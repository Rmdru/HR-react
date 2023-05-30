from __main__ import db


# Define the pivot table model
class SurveyTeam(db.Model):
    survey_id = db.Column(db.Integer, db.ForeignKey('survey.id'), primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'), primary_key=True)

    team = db.relationship('Team', backref=db.backref('survey_teams', lazy=True))

    def to_dict(self):
        return {
            'survey_id': self.survey_id,
            'team_id': self.team_id
        }
