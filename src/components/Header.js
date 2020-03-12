import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import {NavLink as RRNavLink} from 'react-router-dom';

const Header = props => {

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
                                <NavLink exact tag={RRNavLink} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRNavLink} to="/sports">Sports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRNavLink} to="/casino">Casino</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRNavLink} to="/favoritePlayers">Favorite Players</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact tag={RRNavLink} to="/promotionsPage">Promotions</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </>

};

export default Header