import React from 'react';
import Footer from '../Footer';
import '../../App.css';





function PortfolioSection() {
  const background_img = '/images/plexus-wallpaper.jpeg';
  return (



    <div className="container" id="portfolio-container">
      <div className="container-1" id="portfolio-container-1">
        {/* <video src='/videos/video-5.mp4' autoPlay loop muted /> */}

        <div className="container-1-box2" id="portfolio-container-1-box1">
          <img className='portfolio-githubImg' src={process.env.PUBLIC_URL + '/images/Github-Mark.png'} />
        </div>

        <div className="container-1-box2" id="portfolio-container-1-box2">
          <h2>Skin Lesion Classification using OpenCV & Resnet50 based on dermoscopic images</h2>
          <p>A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)

Harrison Jansma on January 20, 2020</p>
        </div>

       

      </div>

      <div className="container-1" id="portfolio-container-1">
        {/* <video src='/videos/video-5.mp4' autoPlay loop muted /> */}

        <div className="container-1-box2" id="portfolio-container-1-box1">
          <img className='portfolio-githubImg' src={process.env.PUBLIC_URL + '/images/Github-Mark.png'} />
        </div>

        <div className="container-1-box2" id="portfolio-container-1-box2">
          <h2>Skin Lesion Classification using OpenCV & Resnet50 based on dermoscopic images</h2>
          <p>A helpful tutorial I wrote recently on how to set up a Bash script that utilized the AWS CLI to start, log into, then shutdown an EC2 instance. (I didn't want to forget the instance was running and lose money)

Harrison Jansma on January 20, 2020</p>
        </div>

       

      </div>

    
    
    </div>

  );
}



export default function Portfolio() {

  return (
    <>

      <PortfolioSection />
      <Footer />
    </>
  );
}






