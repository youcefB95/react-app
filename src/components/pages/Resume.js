import React from 'react';
import '../../App.css';
// import { Document, Page } from 'react-pdf';

import samplePDF from '../../assets/cv.pdf';

export default function Resume() {
  return (
    <iframe src={samplePDF} >
    </iframe>


  );
}