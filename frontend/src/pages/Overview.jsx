import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export function Overview() {
    return (
        <Container className="overview top-content gap-3">
            <Row className="gap-3 flex-column w-100">
                <Col>
                    <Link to="/vragenlijsten" class="item">
                        <span class="material-icons tileIcon fs-1">list_alt</span>
                        <div class="flex">
                            <h2>Vragenlijsten</h2>
                            <div class="bttn">
                                <span class="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/leden" class="item">
                        <span class="material-icons tileIcon fs-1">person</span>
                        <div class="flex">
                            <h2>Leden</h2>
                            <div class="bttn">
                                <span class="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
            <Row className="gap-3 flex-column w-100">
                <Col>
                    <Link to="/teams" class="item">
                        <span class="material-icons tileIcon fs-1">group</span>
                        <div class="flex">
                            <h2>Teams</h2>
                            <div class="bttn">
                                <span class="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col>
                    <Link to="/rapportages" class="item">
                        <span class="material-icons tileIcon fs-1">insights</span>
                        <div class="flex">
                            <h2>Rapportages</h2>
                            <div class="bttn">
                                <span class="material-icons">keyboard_arrow_right</span>
                            </div>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}