import React, { Component } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faChartBar} from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/details.css';


class Details extends Component {
    render() {
        return (
            <div className="container">
                <div className="details">
                <img id="product" src={this.props.image} alt="Shark Ninja"></img>
                <h3>{this.props.title}</h3>
                <p>{this.props.subtitle}</p>
                <hr/>
                {this.props.tags.map((tag, index) => {
                    return (
                        <span style={{ padding: 10}} key={index}>
                            <button style={{ padding: 4}}>{tag}</button>
                        </span>
                    )
                })}
                <h3>Details:</h3>
                {this.props.detailsData.map((detail, index) => {
                    return(
                    <div key={index}>
                        <p>{detail}</p>
                    </div>
                    )
                })}
                <hr/>
                <Container>
                <Navbar expand="lg" variant="light" bg="light">
                  <Nav className = "mr-auto icon">
                    <FontAwesomeIcon style={{marginRight: 10}} icon={faHome}/>
                    <Nav.Link href="#overview">Overview</Nav.Link>
                  </Nav>
                  <Nav className="mr-auto icon">
                    <FontAwesomeIcon  style={{marginRight: 10}} icon={faChartBar}/>
                    <Nav.Link href="#sales">Sales</Nav.Link>
                  </Nav>
                </Navbar>
                </Container>
                </div>
        </div>
        )
    }
}

export default Details;
