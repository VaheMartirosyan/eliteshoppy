import React from 'react';
import './spiner.css'

const Spiner = () => {
    return (
      <div className="lds-css ng-scope">
      <div style={{width:"100%", height:"100%",margin: "20% auto"}} className="lds-eclipse"><div>
              </div>
               </div>
                 </div>
    );
}

export default Spiner;

