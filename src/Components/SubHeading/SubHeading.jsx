import React from 'react';
import './SubHeading.css'
const SubHeading = ({title}) => (
  <div style={{marginBottom:'1rem'}}>
    <p className='p__cormorant'>{title}</p>
    <img src="https://i.ibb.co/j4YWL0X/spoon.png" className='spoon__img' alt="" />
  </div>
);

export default SubHeading;
