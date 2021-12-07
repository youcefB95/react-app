import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import reactDom from 'react-dom';

function HeroSection() {
  return (



    <div className='hero-container'>

      {/* <video src='/videos/video-5.mp4' autoPlay loop muted /> */}


      <h1>“Learning never exhausts the mind.”
</h1>

      <div className='social-icons'>
        <Link
          class='social-icon-link facebook'
          to={{ pathname: 'https://www.facebook.com/youcefb95/' }}
          target='_blank'
          aria-label='Facebook'
        >
          <i class='fab fa-facebook-f' />
        </Link>
        <Link
          class='social-icon-link instagram'
          to={{ pathname: 'https://www.instagram.com/youc95sneaks/' }}
          target='_blank'
          aria-label='Instagram'
        >
          <i class='fab fa-instagram' />
        </Link>
        {/* <Link
          class='social-icon-link youtube'
          to='/'
          target='_blank'
          aria-label='Youtube'
        >
          <i class='fab fa-youtube' />
        </Link> */}
        <Link
          class='social-icon-link twitter'
          to={{ pathname: 'https://twitter.com/BelhYouc/' }}
          target='_blank'
          aria-label='Twitter'
        >
          <i class='fab fa-twitter' />
        </Link>
        <Link
          class='social-icon-link twitter'
          to={{ pathname: 'https://www.linkedin.com/in/youcef-belhadri/' }}
          target='_blank'
          aria-label='LinkedIn'
        >
          <i class='fab fa-linkedin' />
        </Link>
        <Link
          class='social-icon-link github'
          to={{ pathname: 'https://github.com/Youbel95/' }}
          target='_blank'
          aria-label='Github'
        >
          <i class='fab fa-github' />
        </Link>
      



      </div>
     
      <div class="arrow bounce">
        <a id='to-ml-section' class="fas fa-angle-double-down fa-5x" href="#ml-section" ></a>
      </div>

      {/* <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    
      
     */}

    </div>
  );
}

export default HeroSection;
