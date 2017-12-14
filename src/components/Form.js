import React from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
    render() {
        return (
            <Container>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Your Email Address Here" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="yourName">Your Name</Label>
                            <Input type="password" name="Your Name" id="yourName" placeholder="Full Name" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="reserveHours">Hours</Label>
                            <Input type="select" name="select" id="reserveHours">
                                <option>1 Hour</option>
                                <option>2 Hours</option>
                                <option>3 Hours</option>
                                <option>4 Hours</option>
                                <option>5 Hours</option>
                                <option>6 Hours</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleFile"> Art File Upload</Label>
                            <Input type="file" name="file" id="exampleFile" />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Col>
            </Container>
        );
    }
}