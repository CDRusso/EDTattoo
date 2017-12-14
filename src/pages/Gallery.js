import React, { Component } from 'react'
import Nav from '../components/Nav'
import Collage from '../components/Collage'
import { Container, Row, Col } from 'reactstrap';


class Gallery extends Component {
    render () {
        return (
            <div>
                <Nav/>
                <Container className={'p-2'}>
                    <Row>
                        <Col>
                            <Collage/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Gallery
