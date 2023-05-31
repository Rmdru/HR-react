from extensions import db

# This class represents the Question model in the database.
class Questions(db.Model):
    # Unique identifier, question text, question type (multiple choice or open)
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)
    type = db.Column(db.Boolean, nullable=False)

    # Convert the Question object to a dictionary representation
    def to_dict(self):
        return {
            'id': self.id,
            'text': self.text,
            'type': self.type
        }
