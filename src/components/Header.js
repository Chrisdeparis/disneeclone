import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const Nav = styled.nav`
    /* position:fixed; */
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;
`;

const Logo = styled.a`
    padding:0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size:0;
    display: inline-block;

    img {
        display: block;
        width: 100%;
    }
`;

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor:pointer;

        img {
            height: 20px;
            min-width:20px;
            width: 20px;
            z-index:auto;
        }

        span {
            color:rgb(249, 249, 249);
            font-size:13px;
            letter-spacing:1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

            &:before {
                background: rgb(249, 249, 248);
                display:block;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content:'';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0;
                transform-origin: left center;
                transform:scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility:hidden;
                width:auto;
            }
        }

        &:hover {
            span:before {
                transform: scaleX(1);
                visibility:visible;
                opacity: 1!important;
            }
        }
    }

    
    @media (max-width: 768px) {
        display:none;
    }
`;

const Login = styled.a`
    background:rgba(0, 0, 0, 0.6);
    padding: 8px;
    text-transform: uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition: all .2s ease 0s;
    cursor:pointer;

    &:hover {
        background-color: #f9f9f9;
        color:#000;
        border-color:transparent;
    }
`;
function Header() {
    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
        }).catch((error) => {
            alert(error.message);
        })
    }
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Disney+"/>
            </Logo>
            <NavMenu>
                <a href="/accueil">
                    <img src="/images/home-icon.svg" alt="HOME"/>
                    <span>ACCUEIL</span>
                </a>
                <a href="/recherche">
                    <img src="/images/search-icon.svg" alt="SEARCH"/>
                    <span>RECHERCHE</span>
                </a>
                <a href="/watchlist">
                    <img src="/images/watchlist-icon.svg" alt="WATCHLIST"/>
                    <span>WATCHLIST</span>
                </a>
                <a href="/originals">
                    <img src="/images/original-icon.svg" alt="WATCHLIST"/>
                    <span>ORIGINALS</span>
                </a>
                <a href="/movies">
                    <img src="/images/movie-icon.svg" alt="MOVIES"/>
                    <span>MOVIES</span>
                </a>
                <a href="/series">
                    <img src="/images/series-icon.svg" alt="SERIES"/>
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <Login onClick={handleAuth}>Login</Login>
            
        </Nav>
    )
}

export default Header
