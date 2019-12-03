import React from 'react'
import './Colections.scss'

export default (props) => {
    return(
        <div className={'colections'}>
            <div className={'imgcolect'}>
                <img src="https://demo.w3layouts.com/demos_new/template_demo/20-06-2017/elite_shoppy-demo_Free/143933984/web/images/bb1.jpg" alt=""/>
            </div>
            <div className={'textcolect'}>
                <div className={'sedalign'}>
                    <h3>EXCLUSIVE {props.colect} <span>COLLECTIONS</span></h3>
                    <p>Sed ut perspiciatis unde omnis iste natus
                        error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit.</p>
                </div>
            </div>
        </div>
    )
}