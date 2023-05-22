from extensions import db

# This class represents the Team model in the database.
class Team(db.Model):
    # Unique identifier and name for the team
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    # Convert the Team object to a dictionary representation
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }