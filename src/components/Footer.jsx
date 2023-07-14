import React from 'react'
import '/src/styles/footer.css'
import { HashLink as Link } from 'react-router-hash-link'
import Bounce from 'react-reveal/Bounce';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-elems">
          <Bounce>
            <div className="first-sec">
              <h1>Jenison's Portfolio</h1>
              <p>Thank you for visiting my portfolio website.<br />You can contact me through social media links.</p>
              <br />
              <hr style={{ backgroundColor: '#fff' }} />
              <h2>Jenison Monteiro &copy;{' ' + new Date().getFullYear()}<br />All Rights Reserved</h2>
            </div>
            <div className="second-sec">
              <h1>Quick Links</h1>
              <ul>
                <li><i class="fa-solid fa-greater-than"></i>{' '}<Link smooth to='#'>Home</Link></li>
                <li><i class="fa-solid fa-greater-than"></i>{' '}<Link smooth to='#about'>About</Link></li>
                <li><i class="fa-solid fa-greater-than"></i>{' '}<Link smooth to='#skills'>Skills</Link></li>
                <li><i class="fa-solid fa-greater-than"></i>{' '}<Link smooth to='#project'>Project</Link></li>
                <li><i class="fa-solid fa-greater-than"></i>{' '}<Link smooth to='#contact'>Contact</Link></li>
              </ul>
            </div>
            <div className="third-sec">
              <h1>Contact Info</h1>
              <ul>
                <li><i class="fa-solid fa-envelope"></i>&nbsp;jenisonmonteiro05@gmail.com</li>
                <li><i class="fa-solid fa-map"></i>&nbsp;Mangalore, India</li>
              </ul>
              <div className="social-links">
                <a href='https://github.com/Jenihacker/' target='__blank'><i class="fa-brands fa-github"></i></a>
                <a href='https://www.linkedin.com/in/jenison-monteiro-7715b0205/' target='__blank'><i class="fa-brands fa-linkedin"></i></a>
                <a href='https://twitter.com/jenisonmonteiro/' target='__blank'><i class="fa-brands fa-twitter"></i></a>
                <a href='https://www.facebook.com/jenison.monteiro.3/' target='__blank'><i class="fa-brands fa-facebook"></i></a>
                <a href='https://www.instagram.com/jenison__05/' target='__blank'><i class="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </Bounce>
        </div>
      </footer>
    </>
  )
}

export default Footer