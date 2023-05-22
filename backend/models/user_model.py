from extensions import db

# This class represents the User model in the database.
class User(db.Model):
    # Unique identifier, name, email, password and role for the user
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(255), nullable=True)
    role = db.Column(db.Integer, nullable=False)

    # Convert the User object to a dictionary representation
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'role': self.role
        }