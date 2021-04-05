import React from 'react'

const ArrowForwardIcon = ({className, fillColor="white"}) => (
    <svg className={className} width="100%" height="100%" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
        <rect x="0" y="0" width="18" height="18" style={{fill:"none",fillRule:"nonzero"}}/>
        <path d="M9,3L7.943,4.058L12.128,8.25L3,8.25L3,9.75L12.128,9.75L7.943,13.942L9,15L15,9L9,3Z" style={{fill:fillColor,fillRule:"nonzero"}}/>
    </svg>
)

export default ArrowForwardIcon;
