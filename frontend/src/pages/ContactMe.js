import React from 'react'

import styled from 'styled-components'

import { faGithubSquare, faLinkedin, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactMe = () => {
    return (
        <ContactStyled>
            <Title>
                <h2>Get in touch</h2>
            </Title>
            <Areas>
                <div id="form">
                    <form id="contact-form" method="post">
                        Name: <input type="text" />
                        Email: <input type="email" />
                        Message: <textarea rows="5" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <Network>
                    <Social href="http://github.com/robinsonsoares" target='_blank'>
                        <FontAwesomeIcon icon={faGithubSquare} size='4x'/>
                        <h3>github.com/robinsonsoares</h3>
                    </Social>
                    <Social href="https://www.linkedin.com/in/robinson-soares/" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size='4x'/>
                        <h3>LinkedIn</h3>
                    </Social>
                    <Social href="https://www.youtube.com/channel/UCqUY0IBwIZK_ICBKDQpk9XA" target='_blank'>                    
                    <FontAwesomeIcon icon={faYoutubeSquare} size='4x' />
                        <h3>Youtube</h3>
                    </Social>     
                    <Social href="https://www.instagram.com/soares.robinson/" target='_blank'>
                    <FontAwesomeIcon icon={faInstagramSquare} size='4x'/>
                        <h3>Instagram</h3>
                    </Social>                                                                           
                </Network>
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled.div`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`;

const Areas = styled.div`
    display: flex;
    align-items: center;
`;

const Network = styled.div`
    padding: 1rem 5rem;    
`;

const Social = styled.a`
    display: flex;    
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none;
    &:hover{
        background: yellow;
        cursor: pointer;
    }
    h3{
        color: grey;
        margin: 2rem;
    }
    color: inherit;
`;

export default ContactMe