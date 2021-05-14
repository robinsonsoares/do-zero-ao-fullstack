import React from 'react'
import styled from 'styled-components'

import { faGithubSquare, faLinkedin, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialNetworkSection = () => {
    return (
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
    )
}

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

export default SocialNetworkSection