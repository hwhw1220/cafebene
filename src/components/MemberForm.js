import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const MemberFormBlock = styled.div`
    max-width:500px; margin:0 auto;
    h3 { text-align:center; font-size:40px; margin:30px 0; }
`;
const StyledInput = styled.input`
    padding:15px 10px; 
    border-radius:10px;
    border:1px solid #555;
    width:100%;
    margin-bottom:20px;
`;
const Button = styled.button`
    width:100%;
    padding:15px 0px;
    color:#fff;
    background:#999;
    border-radius:10px;
    border:none;
    margin-top:20px;
    &:hover { background:#333 }
`;
const MemberFoot = styled.div`
    text-align:right;
    margin-top:20px; 
    a { color:blue; text-decoration:underline }
`;

const textMap = { login:'로그인', join:'회원가입' }

const MemberForm = ({type}) => {
    const text = textMap[type]
    return (
        <MemberFormBlock>
            <h3>{text}</h3>
            <form>
                { type==='join' && <StyledInput name="username" placeholder="이름" type="text" /> }
                <StyledInput name="userid" placeholder="아이디" type="text" />
                <StyledInput name="password" placeholder="비밀번호" type="password" />
                { type==='join' &&
                <>
                    <StyledInput name="password" placeholder="비밀번호확인" type="password" />
                    <label>성별 : </label> 남 <input type="radio" name="gender" value="m" /> 여 <input type="radio" name="gender" value="y" />
                </>
                }
                <Button>{text}</Button>
            </form>
            <MemberFoot>
                {
                    type==='login' ? <Link to="/join">회원가입</Link> : <Link to="/login">로그인</Link>
                }
            </MemberFoot>
        </MemberFormBlock>
    );
};

export default MemberForm;