import React from 'react';
import styled from 'styled-components';

const AboutsectionBlock = styled.div`
    border-top:107px solid violet;
    padding:100px 0;
`;

const Aboutsection = () => {
    return (
        <AboutsectionBlock>
            <div className="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.720016869996!2d127.02636067990821!3d37.499983708773094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15be75f7fd7%3A0x6d08ce3c892ac6cd!2z6re466aw7Lu07ZOo7YSw7JWE7Yq47ZWZ7JuQIOqwleuCqOy6oO2NvOyKpOuzhOq0gA!5e0!3m2!1sko!2skr!4v1635209998590!5m2!1sko!2skr" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </AboutsectionBlock>
    );
};

export default Aboutsection;