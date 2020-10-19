import React from 'react'
import { useNavigate } from 'react-router-dom'

const Link = ({ to, children, ...otherProps}) => {
    const navigate = useNavigate();
    return <span {...otherProps} onClick={() => navigate(to)}>{children}</span>
}

export default Link