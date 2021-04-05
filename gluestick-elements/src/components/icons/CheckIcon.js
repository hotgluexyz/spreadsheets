import React from 'react'

const CheckIcon = ({className, fillColor="white"}) => (
    <svg className={className} viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2}}>
        <rect x="0" y="0" width="18" height="18" style={{fill:"none",fillRule:"nonzero"}}/>
        <path d="M6.75,12.128L3.623,9L2.558,10.058L6.75,14.25L15.75,5.25L14.692,4.193L6.75,12.128Z" style={{fill:fillColor,fillRule:"nonzero"}}/>
    </svg>
)

export default CheckIcon;
