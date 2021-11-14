import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const MemberTempBlock = styled.div`
    border-top:107px solid orange;
    .row { padding:100px 0;
        h2 { font-size:30px; text-align:center }
    }
`;

const MemberTemp = ({children}) => {
    return (
        <>
            <Header />
            <MemberTempBlock>
                <div className="row">
                    <h2>MEMBERSHIP</h2>
                    { children }
                </div>
            </MemberTempBlock>
            <Footer />
        </>
    );
};

export default MemberTemp;