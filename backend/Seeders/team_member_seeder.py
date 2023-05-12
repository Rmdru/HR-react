from backend.models.userModel import User
from backend.models.user_team_model import UserTeam
from main import db, app
from faker import Faker
import random

fake = Faker()

# Create a list of team IDs to select from (1 to 5)
team_ids = [1, 2, 3, 4, 5]

# Generate 50 random team member records
for i in range(50):
    # Create a new team member
    new_user = User(
        name=fake.name(),
        email=fake.email(),
        password=fake.password()
    )

    # Add the new team member to the database
    db.session.add(new_user)

    # Commit the changes to the database so that we can access the new user's ID
    db.session.commit()

    # Select a random class ID
    class_id = random.choice(team_ids)

    # Create a new TeammemberTeam object and add it to the database
    user_team = UserTeam(user_id=new_user.id, team_id=team_ids)
    db.session.add(user_team)

# Commit the changes to the database
db.session.commit()