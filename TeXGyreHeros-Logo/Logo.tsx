import React from 'react'

// HTML for creating Logo SVG using TeX-Gyre-Heros font
const Logo: React.FC<any> = () => (
  <div
    style={{
      width: '10rem',
      height: '10rem',
      borderRadius: '50%',
      border: 'solid 0.65rem white',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '5rem',
      fontWeight: 900,
      transform: 'scale(3.125)',
    }}
  >
    <div style={{ transform: 'translate(0px, -4px)' }}>G</div>
  </div>
)

export default Logo
