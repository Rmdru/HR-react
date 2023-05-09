from backend.controllers.TeamController import TeamController
def setup_team_routes(app):
    @app.route('/api/teams', methods=['GET'])
    def get_teams():
        return TeamController.get_all_teams()