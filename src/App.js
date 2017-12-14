import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import logo from './tattootestlogo.png';
import './App.css';

import PagesContainer from './Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PagesContainer />

          <br/>

        <footer className="App-footer">
            <Container>
                <Row>
                    <Col xs="6" sm="4">
                        <h4> Location </h4>
                    </Col>
                    <Col xs="6" sm="4">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                    <Col sm="4">
                        <h4> Find Me Here!</h4>
                        <SocialIcon url="http://twitter.com" network="twitter" color={"black"}/>
                        <SocialIcon url="http://instagram.com" network="instagram" color={"black"} />
                        <SocialIcon url="http://snapchat.com" network="snapchat" color={"black"}/>

                    </Col>
                </Row>
            </Container>
        </footer>
      </div>
    );
  }
}

export default App;
