import React, { Component } from 'react'
import { Card, CardImg, Container, Row, Col, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import Nav from '../components/Nav'
import noImg from '../Images/no-image.png'


class Art extends Component {
    render () {
        return (
            <div>
                <Nav/>

                <br/>

                <div>
                    <Container>
                        <Row>
                            <Col xs="6" sm="4">
                                <Card>
                                    <CardImg top width="100%" src={noImg} />
                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs="6" sm="4">
                                <Card>
                                    <CardImg top width="100%" src={noImg} />                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs="6" sm="4">
                                <Card>
                                    <CardImg top width="100%" src={noImg} />                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <br/>

                        <Row>
                            <Col xs="6" sm="4">
                                <Card>
                                    <CardImg top width="100%" src={noImg} />                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs="6" sm="4">
                                <Card>
                                    <CardImg top width="100%" src={noImg} />                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col xs="6" sm="4">
                                <Card>
                                    <CardImg top width="100%" src={noImg} />                                    <CardBody>
                                        <CardTitle>Card title</CardTitle>
                                        <CardSubtitle>Card subtitle</CardSubtitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Art
