import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    
    <div className='cards' id='ml-section'>
      <h1 >Machine Learning Projects</h1>
      <div className='cards__container' >
        <div className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src= '/images/isic-img1.jpeg'
              text='Skin lesion classification using OpenCV & Resnet50 based on dermoscopic images'
              label='Deep-Learning / Computer Vision'
              path='/services'
            />
            <CardItem
              src='/images/maskrcnn-img.png'
              text='Image segmentation & Object detection using MaskRCNN based on COCO dataset'
              label='Deep Learning / Object Segementation'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            {/* {/* <CardItem
              src='/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            /> */ }
            <CardItem
              src='/images/twitter-sentiment-analysis-2.jpeg'
              text='NLP Twitter sentiment analysis based on thousands of tweets from the social network'
              label='Machine Learning / NLP'
              path='/products'
            /> 
            
            <CardItem

              src='/images/ambari-hadoop.jpeg'
              text='Anomaly detection using unsupervised learning based on hadoop system metrics'
              label='Machine / Anomaly detection'
              path='/sign-up'
            /> 
            {/* <a href="#title">Back dddddto the top </a> */}
          </ul>
        </div>
      </div>
    </div>
   
  );
}

export default Cards;
