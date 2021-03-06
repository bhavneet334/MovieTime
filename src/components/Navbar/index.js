import React from 'react';
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ( {toggle} ) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>MovieTime</NavLogo>
                  <MobileIcon onClick={toggle}>
                     <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'> About </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='discover'> Discover </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='services'>  Now Streaming </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='mymovies'> Mymovies </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='signup'> Sign Up </NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signin'> Sign In </NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
