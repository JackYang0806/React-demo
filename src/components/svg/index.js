import React from 'react'
import propTypes  from 'prop-types'
const SvgIcon=props=>{
    const {iconClass,color}=props;
    return (
        <i className="svg-icons-content">
            <svg className="svg-icon" aria-hidden="true">
                <use xlinkHref={"#icon-"+iconClass} fill={color} />
            </svg>
        </i>
    )
}
SvgIcon.propTypes ={
    iconClass:propTypes.string.isRequired,
    color:propTypes.string
};
SvgIcon.defaultProps={
    color:"#333"
}
export default SvgIcon