import React from 'react'

import styled from 'styled-components'

import SocialNetworkSection from '../components/SocialNetworkSection'

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
                <SocialNetworkSection />
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

export default ContactMe