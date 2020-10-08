//@flow
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = event => {
    event.preventDefault();
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="container">
        <div className="brand">
          <Link href="/">
            <a>
              <img src="/sibiti.svg" alt="sibiti"/>
            </a>
          </Link>
        </div>

        <div className="menus">
          <button onClick={toggleMenu} className="close">
            <i className="fa fa-times" />
          </button>
          <ul>
            <li key="0">
              <Link href="/">
                <a>Test Platform</a>
              </Link>
            </li>
            <li key="1">
              <Link href="/event">
                <a>Event Platform</a>
              </Link>
            </li>
            <li key="2">
              <Link href="/clients">
                <a>Clients</a>
              </Link>
            </li>
            <li key="3">
              <Link href="/career">
                <a>Career</a>
              </Link>
            </li>
            <li key="4">
              <a
                className="navbar-btn"
                href="http://demo.sibiti.co.id/login?utm=sibiti"
                rel="noopener"
                target="_blank"
              >
                See Demo
              </a>
            </li>
          </ul>
        </div>

        <button onClick={toggleMenu} className="burger">
          <i className="fa fa-bars" />
        </button>
      </div>
      <style jsx>{`
        a.navbar-btn {
          padding: 10px 25px;
          border-radius: 50px;
          background-color: #6273d9;
          color: white;
          transition: all 0.1s linear;
        }
        a.navbar-btn:hover,
        a.navbar-btn:focus,
        a.navbar-btn:active {
          background-color: #6273d9;
          color: white;
        }
        nav {
          backface-visibility: hidden;
          border-bottom: solid #d6d6d6 1px;
          background-color: #fff;
          box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.34);
          padding: 20px 0;
          position: fixed;
          width: 100%;
          z-index: 99;
          left: 0;
          top: 0;
        }

        .menus {
          position: relative;
        }

        .menus ul {
          text-align: right;
        }

        ul {
          margin: 0;
          padding: 0;
        }

        ul > li {
          display: inline-block;
          display: inline-block;
          font-size: 1rem;
          line-height: 2rem;
          font-weight: 500;
          padding: 0 15px;
        }

        .container {
          display: flex;
        }

        .container div {
          flex: 1 0 0;
        }

        .container .menus {
          flex: 4 0 0;
        }

        .brand img {
          height: 30px;
        }

        a {
          color: #777777;
        }

        a:hover,
        a:active,
        a:focus {
          color: #464646;
          text-decoration: none;
        }
        button.burger {
          position: fixed;
          border: none;
          top: 0;
          right: 0;
          z-index: 98;
          font-size: 2.3rem;
          height: 70px;
          width: 73px;
          color: #6273d9;
          background: transparent;
        }

        button.close {
          position: absolute;
          border: none;
          top: 0;
          right: 0;
          font-size: 2.3rem;
          height: 70px;
          width: 73px;
          color: #464646;
          background: transparent;
        }
        @media (min-width: 1024px) {
          button.burger,
          button.close {
            display: none;
          }
        }
        @media (max-width: 1023px) {
          .menus {
            display: block;
            position: fixed;
            top: 0;
            z-index: 99;
            right: ${toggle ? '0' : '-100%'};
            height: 100vh;
            width: 100%;
            background: rgba(255, 255, 255, 0.95);
          }
          .menus ul {
            text-align: center;
            margin-top: 73px;
          }

          .menus ul li {
            display: block;
            font-weight: 500;
            padding: 0 15px;
            font-size: 1.4rem;
            line-height: 4rem;
          }
        }
      `}</style>
    </nav>
  )
}
