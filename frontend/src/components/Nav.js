import React from 'react'

//Styled Components
import styled from 'styled-components'

const Nav = () => {
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }
    return (
        <StyledNav>
            <h1>Robinson Soares</h1>
            <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact Me</li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    ul {
        display: flex;
        list-style: none;        
    }
    li {
        padding-left: 10rem;
    }
`;

export default Nav