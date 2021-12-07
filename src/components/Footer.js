import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      
        <div class='footer-link-items'>
            <h2>About this page</h2>
            {/* <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
            <p>This website was coded in ReactJS. <br/>It is hosted on a LAMP server from DigitalOcean.<br/> The code can be found here.<a href="" ></a></p>
          </div>
        
         <div class='footer-link-items'>
            <h2>Follow Me</h2>

            <div className='social-icons-footer'>
              <Link
                class='social-icon-link-footer facebook'
                to={{ pathname: 'https://www.facebook.com/youcefb95/' }}
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                class='social-icon-link-footer instagram'
                to={{ pathname: 'https://www.instagram.com/youc95sneaks/' }}
                target='_blank'
                aria-label='Instagram'
              >
                <i class='fab fa-instagram' />
              </Link>
              {/* <Link
          class='social-icon-link-footer youtube'
          to='/'
          target='_blank'
          aria-label='Youtube'
        >
          <i class='fab fa-youtube' />
        </Link> */}
              <Link
                class='social-icon-link-footer twitter'
                to={{ pathname: 'https://twitter.com/BelhYouc/' }}
                target='_blank'
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link-footer twitter'
                to={{ pathname: 'https://www.linkedin.com/in/youcef-belhadri/' }}
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
              <Link
                class='social-icon-link-footer github'
                to={{ pathname: 'https://github.com/Youbel95/' }}
                target='_blank'
                aria-label='Github'
              >
                <i class='fab fa-github' />
              </Link>




            </div>


          </div>
        
        
      
      
    </div>
  );
}

export default Footer;
