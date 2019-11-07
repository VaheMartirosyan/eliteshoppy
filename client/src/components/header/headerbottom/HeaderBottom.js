import React from 'react';
import './HeaderBottom.css'

export default ()=>{
    return(
        <div className={'headB'}>
            <div className={'searchform'}>
                <form action="#">
                    <input type="text" placeholder={'Search For ...'}/>
                    <button>OK</button>
                </form>
            </div>
            <div className={'logo'}>
                <h1>
                    <a href="#">
                        <span className={'e'}>E</span>
                        <span className={'lite'}>lite Shoppy</span>
                        <i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i>
                    </a>
                </h1>
            </div>
            <div className={'headlogos'}>

                <ul>
                    <li className={'shareon'}>Share On:</li>
                    <li>
                        <i className="fa fa-facebook firstfb" aria-hidden="true"/>
                    </li>
                    <li>
                        <i className="fa fa-twitter twit" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-instagram ig" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-linkedin linkedin" aria-hidden="true"></i>
                    </li>
                </ul>
            </div>
        </div>
    )
}