import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, Button, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './Nav.css'

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const buttonClass = 'btn btn-dark custom-button'

        return (
            <div>
                <Navbar light expand="md" className={'custom-nav'}>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mr-auto" navbar>
                            <NavItem className={'mr-2'}>
                                <Link className={buttonClass} to='/'>Home</Link>
                            </NavItem>
                            <NavItem className={'mr-1'}>
                                <Link className={buttonClass} to='/Gallery'>Gallery</Link>
                            </NavItem>
                            <NavItem className={'mr-1'}>
                                <Link className={buttonClass} to='/Art'>Art</Link>
                            </NavItem>
                            <NavItem>
                                <Link className={buttonClass} to='/Contact'>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}