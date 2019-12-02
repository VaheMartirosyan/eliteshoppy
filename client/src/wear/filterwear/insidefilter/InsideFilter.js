import React from 'react'
import './InsideFilter.scss'
import {withRouter} from 'react-router-dom'


const InsideFilter = (props) => {
    return(
        <p className={'weartypes'} onClick={() => props.history.push(`/${props.gender}/${props.weartype}`)}>
            {props.weartype}
        </p>
    )
}

export default withRouter(InsideFilter)