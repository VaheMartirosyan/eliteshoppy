import React from 'react';
import FooterBottom from './footerbottom/Footerbottom';
import './Footer.scss'
import './MediaFooter.scss'

export default ()=>{

    return(
       <div className={'footerl'}>

           <div className={'footertop'}>
               <div className={'aaaa'}>
                   <div className={'footone aa'}>
                       <div className={'shopy'}>
                           <span className={'bigE'}>E</span>
                           <span className={'smallite'}>lite Shoppy</span>
                           <i className="fa fa-shopping-bag top_logo_agile_bag" aria-hidden="true"></i>
                       </div>
                       <div className={'lorem'}>
                           <p>Lorem ipsum dolor sit amet, consectetur.</p>
                           <p>Lorem ipsum dolor sit amet. Lorem ipsum.</p>
                           <p>Lorem ipsum dolor sit amet, consectetur.</p>
                       </div>
                       <div className={'footericons'}>
                           <ul>
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

                   <div className={'footertwo aa'}>
                       <p><b>OUR</b> INFORMATION</p>
                       <div className={'footnav'}>
                           <ul>
                               <li>
                                   <a href="1">Home</a>
                               </li>
                               <li>
                                   <a href="1">Men`s wear</a>
                               </li>
                               <li>
                                   <a href="1">Women`s wear</a>
                               </li>
                               <li>
                                   <a href="1">About</a>
                               </li>
                               <li>
                                   <a href="1">Short Codes</a>
                               </li>
                               <li>
                                   <a href="1">Contact</a>
                               </li>
                           </ul>
                       </div>
                   </div>

               </div>

               <div className={'aaaa'}>
                   <div className={'footerthree aa'}>
                       <p className={'storetxt'}><b>STORE</b> INFORMATION</p>
                       <div className={'footercontact'}>
                           <i className="fa fa-phone" aria-hidden="true"></i>
                           <div>
                               <b>Phone Number</b>
                               <p>+1 234 567 8901</p>
                           </div>
                       </div>
                       <div className={'footercontact'}>
                           <i className="fa fa-envelope" aria-hidden="true"></i>
                           <div>
                               <b>Email Address</b>
                               <p>Email : <span className={'examolefoot'}>mail@example.com</span></p>
                           </div>
                       </div>
                       <div className={'footercontact'}>
                           <i className="fa fa-map-marker" aria-hidden="true"></i>
                           <div>
                               <b>Location</b>
                               <p>Armenia,Yerevan Moscow street</p>
                           </div>
                       </div>
                   </div>

                   <div className={'flickr aa'}>
                       <p><b>FLICKR</b> POSTS</p>
                       <div className={'flickrimg'}>
                           <div className={'flickrimgdiv'}>
                               <div className={'flickri1'}></div>
                               <div className={'flickri2'}></div>
                               <div className={'flickri3'}></div>
                           </div>
                           <div className={'flickrimgdiv'}>
                               <div className={'flickri2'}></div>
                               <div className={'flickri3'}></div>
                               <div className={'flickri1'}></div>
                           </div>
                           <div className={'flickrimgdiv'}>
                               <div className={'flickri3'}></div>
                               <div className={'flickri1'}></div>
                               <div className={'flickri2'}></div>
                           </div>
                       </div>
                   </div>
               </div>

           </div>


           <div>
               <FooterBottom/>
           </div>
       </div>
    )
}