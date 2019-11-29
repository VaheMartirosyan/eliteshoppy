import React from 'react'
import './InsideFilter.scss'
import {withRouter} from 'react-router-dom'


const InsideFilter = (props) => {
    return(
        <p className={'weartypes'} onClick={() => props.history.push(`/mens/${props.weartype}`)}>
            {props.weartype}
        </p>
    )
}

export default withRouter(InsideFilter)