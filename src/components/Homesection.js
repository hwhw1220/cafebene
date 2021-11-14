import React from 'react';
import './Homesection.scss';
import styled from 'styled-components';

const Article1 = styled.div`
    height:30vw;
    background-image:url('./images/slide1.jpg');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
`;

const Homesection = () => {
    return (
        <div className="homeWrap">
            <Article1 className="article1"></Article1>
            <div className="article2">
                <div className="row">
                    <ul className="local">
                        <li>
                            <a href="#">
                                <img src="./images/img1.jpg" alt="" />
                                <div>
                                    <strong>이벤트</strong>
                                    <p>카페베네 서포터즈</p>
                                    <p>베테랑3기 발표</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/img2.jpg" alt="" />
                                <div>
                                    <strong>이벤트</strong>
                                    <p>베네켓 게임 이벤트</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/img3.jpg" alt="" />
                                <div>
                                    <strong>이벤트</strong>
                                    <p>베네랑 3기 모집</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/img4.jpg" alt="" />
                                <div>
                                    <strong>메뉴</strong>
                                    <p>오곡 라떼&amp;</p>
                                        <p>피스타치오 라떼</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/img5.jpg" alt="" />
                                <div>
                                    <strong>메뉴</strong>
                                    <p>유자 히비스커스 티</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./images/img6.jpg" alt="" />
                                <div>
                                    <strong>메뉴</strong>
                                    <p>자몽 얼그레이 티</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="lifeStyle">
                        <h2>Hello again</h2>
                        <ul>
                            <li>
                                <img src="./images/img7.gif" alt="" />
                            </li>
                            <li>
                                <img src="./images/img8.png" alt="" />
                            </li>
                            <li>
                                <img src="./images/img9.jpg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="article3">
                <div className="row">
                    <div className="container">
                        <div className="slide">
                        <img src="./images/bene-s1.jpg" alt="" />
                        <img src="./images/bene-s2.jpg" alt="" />
                        <img src="./images/bene-s3.jpg" alt="" />
                        <img src="./images/bene-s4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homesection;