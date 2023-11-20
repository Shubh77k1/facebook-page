import React from 'react'

const Header = () => {
  return (
    <>
      <div className='nav'>
       <div className='logo'>
        <img src='https://asset.brandfetch.io/idbHZbvDnq/idI_cIuhCO.png?updated=1693460418707' alt='logo'></img>
       </div>
       <div className='headerButton'>
       <h3>STORIES</h3>
       <button style={{width:"100px", height:"30px", borderRadius:"5px", border:"none", backgroundColor:"orange", cursor:"pointer"}}>Courses</button>
       </div>
      </div>
    </>
  )
}

export default Header
