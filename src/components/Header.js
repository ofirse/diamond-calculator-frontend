import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import {NavLink as RRNavLink} from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return  <>
            <Navbar color="dark" dark expand="md">
                <div className="container">
                    <NavbarBrand href="/">
                        <Logo width="166px"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink exact tag={RRNavLink} to="/">Price Calculator</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </>

};

export default Header
