import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

import { ReactComponent as Logo } from '../assets/img/logo.svg';

import {NavLink as RRNavLink} from 'react-router-dom';

export default class Example extends React.Component {
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
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">
                            <Logo width="166px"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/sports">Sports</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/casino">Casino</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact tag={RRNavLink} to="/favoriteplayers">Favorite Players</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}