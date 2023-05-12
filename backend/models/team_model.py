from main import db, app

# Define the Team model

class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

# Create the tables
# with app.app_context():
#    db.create_all()