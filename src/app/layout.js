import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import '../../styles/aboutUs.css';
// import '../../styles/gblobaltest.css';
import React from 'react';
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          {/* <div className="navbar"> */}
            {/* <Link href="/"> 
              <img className="icon-tag" src="/icon.jpg" alt="fghj"/>
            </Link> */}
            <ul>
              <li>
              <Link href="/"> 
              <img className="icon-tag" src="/icon.jpg" alt="fghj"/>
            </Link>
              </li>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/symbols">
                  Traffic <br/> Symbols
                </Link>
              </li>
              <li>
                <Link href="https://sadak-soochak.streamlit.app/">
                M.L <br/> Model
                </Link>
              </li> 
              <li>
                <Link href="http://localhost:3002/" >Grievances</Link>
              </li> 
              <li>
                <Link href="/aboutUs">
                  About <br/> us
                </Link>
              </li>
              <li className="special">
                <LoginLink>Sign in</LoginLink>
              </li>
              <li className="special">
                <RegisterLink>Sign Up</RegisterLink>
              </li>
            </ul>
          {/* </div> */}
        </nav>

        {/* Content */}
        {children}

        {/* Footer */}
        {/* <footer id="advanced-footer">
    <div id="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <div id="contact-info">
            <p>Contact us: <a href="mailto:info@example.com">info@example.com</a></p>
        </div>
    </div>
</footer> */}

      </body>
    </html>
  );
}
