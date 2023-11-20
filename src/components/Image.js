import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faStar,faThumbsUp,faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const Image = () => {
  return (
    <>
      <div className='image'>
        <div className='roundImage'>
          <img
            src='https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww'
            alt='round'
          ></img>
          <span >Nikhil Kumar</span>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#5eff00', marginLeft:'5px' }} />


          <div className='button'>
            <div className='one'>
              <button className='followers'>6482</button>
              <h5 style={{ marginLeft: '20px' }} className='followers-text1'>
                Followers
              </h5>
            </div>

            <div className='two'>
              <button className='following'>245</button>
              <h5 style={{ marginLeft: '20px' }} className='following-text2'>
                Following
              </h5>
              <br />
            </div>
          </div>
        </div>
      </div>
      <h5 style={{marginTop:"120px", marginLeft:"70px"}}>Co-founder & CEO at Terribly Tiny Tales</h5>
      <a style={{marginTop:"50px", marginLeft:"70px",}} href='/'>http://www.instagram.com/anujgosalia</a>
      <div className='followIcons'>
      <FontAwesomeIcon icon={faStar} style={{color:'#095ef1', cursor:"pointer", marginRight:"10px"}} />
      <p style={{ marginRight:"10px"}}>125</p>
      <FontAwesomeIcon icon={faThumbsUp} style={{color: "#e3db0d", cursor:"pointer", marginRight:"10px"}} />
      <p style={{ marginRight:"10px"}}>12</p>
      <FontAwesomeIcon icon={faEye} style={{color: "#e6e6e6", cursor:"pointer", marginRight:"10px"}} />
      <p style={{ marginRight:"10px"}}>57.8K</p>
      <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000", cursor:"pointer", marginRight:"10px"}} />
      <p style={{ marginRight:"10px"}}>26.0K</p>
      </div>
    </>
  );
};

export default Image;
