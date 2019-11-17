import React from 'react'
import './InsideFilter.scss'

export default ({weartype}) => {
    return(
        <p className={'weartypes'}>
            {weartype}
        </p>
    )
}