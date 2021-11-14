import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { FaUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderBlock = styled.div`
    box-shadow:0px 2px 2px #E9A969;
    padding:25px 0;
    position:fixed; top:0; left:0; width:100%; color:#fff;
    .row { display:flex; justify-content:space-between; align-items:center; 
        .nav { 
            .depth1 { display:flex; 
                li { margin:0 20px; padding:20px 0; position:relative;
                    font-size:20px; text-shadow:2px 2px 2px #000;
                    .depth2 { display:none; color:#000;
                        position:absolute; top:100%; left:50%;
                        transform:translateX(-50%);
                        width:150px; background:#fff; border:1px solid #000;
                        padding:20px 0px; border-radius:10px;
                        li { padding:5px 0px; font-size:16px; text-shadow:0px 0px 0px transparent; }
                    }
                    &:hover > .depth2 { display:block }
                }
            }
        }
        .mobNav { position:relative;
            button { padding:10px 20px; 
                border-radius:50px;
                font-size:20px; 
                // background:#fff;
                display:flex; align-items:center;
                .ham { margin-right:10px }
            }
            .mobNavList { position:absolute; display:none;
                top:100%; right:0;
                border:1px solid #000;
                width:150px;
                padding:10px 0px;
                border-radius:10px;
                background:#fff;
                color:#000;
                &.opener { display:block }
                ul { 
                    li { padding:0 20px; line-height:30px;
                        &:nth-child(3) {
                            border-top:1px solid #ddd;
                            padding-top:10px;
                            margin-top:10px;
                        }
                    }
                }
            }
        }
    }
`;

const Header = ({onSelect}) => {

    const [opener, setOpener] = useState(false);
    const openClose = () => {
        setOpener(!opener)
    }

    const [scy, setScy] = useState(0)
    const onScroll = () => {
        setScy(window.scrollY)
    }

    useEffect(
        ()=>{
            window.addEventListener("scroll", onScroll)
            return () => window.removeEventListener("scroll", onScroll)
        }, []
    )

    return (
        <HeaderBlock style={{ background: scy ? "#fff" : "transparent", color: scy ? "#000" : "#fff"  }}>
            <div className="row">
                <h1><Link to="/"><img src="./images/logo.png" alt="" /></Link></h1>
                <nav className="nav">
                    <ul className="depth1">
                        <li><Link to="/product">Product</Link>
                            <ul className="depth2">
                                <li><Link to="/product" onClick={()=>onSelect(0)}>상품메뉴1</Link></li>
                                <li><Link to="/product" onClick={()=>onSelect(1)}>상품메뉴2</Link></li>
                                <li><Link to="/product" onClick={()=>onSelect(2)}>상품메뉴3</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/news">News</Link>
                            <ul className="depth2">
                                <li>뉴스메뉴1</li>
                                <li>뉴스메뉴2</li>
                                <li>뉴스메뉴3</li>
                            </ul>
                        </li>
                        <li><Link to="/community">Community</Link>
                            <ul className="depth2">
                                <li>커뮤니티메뉴1</li>
                                <li>커뮤니티메뉴2</li>
                                <li>커뮤니티메뉴3</li>
                            </ul>
                        </li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className="mobNav">
                    <button onClick={openClose}>
                        <GiHamburgerMenu className="ham" />
                        <FaUserCircle />
                    </button>
                    <div className={cn("mobNavList", {opener})}>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/join">Join</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/community">Community</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </HeaderBlock>
    );
};

export default Header;