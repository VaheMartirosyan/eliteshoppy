import React from 'react'
import Wear from "../wear/Wear";
import './Contact.scss'

export default ()=>{
    return(
        <div>
            <Wear wear={'Contact'}/>
            <div className={"contactTopDiv"}>
                <div className={"ContDiv"}>
                    <i className={'fa fa-map-marker'}></i>
                    <h4>ADDRESS</h4>
                    <p>12K Street, 45 Building Road</p>
                    <p>California, USA.</p>
                </div>
                <div className={"ContDiv pzik"}>
                    <i className={'fa fa-phone'}></i>
                    <h4>CALL US</h4>
                    <p>+1234 758 839</p>
                    <p>+1273 748 730</p>
                </div>
                <div className={"ContDiv"}>
                    <i className={'fa fa-envelope-o'}></i>
                    <h4>EMAIL</h4>
                    <p>info@example1.com</p>
                    <p>info@example2.com</p>
                </div>
            </div>
            <div className={'googleMap'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266027.4853730693!2d44.29626095939723!3d40.148396280818005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9LCDQkNGA0LzQtdC90LjRjw!5e0!3m2!1sru!2s!4v1574262658505!5m2!1sru!2s"
                     height="450" frameBorder="0"  allowFullScreen="" title='map'></iframe>
            </div>
            <div className={'MoreInfo'}>
                <div className={'ForMoreInfo'}>
                    <h2>FOR MORE <span> INFORMATION</span></h2>
                    <div className={"InfoIcons"}>
                        <div className={"iconsI"}>
                            <i className={'fa fa-volume-control-phone'}></i>
                        </div>
                        <div className={"textInfo"}>
                            <h4>TELEPHONE</h4>
                            <p>+1 (100)222-23-33</p>
                        </div>
                    </div>
                    <div className={"InfoIcons"}>
                        <div className={"iconsI"}>
                            <i className={'fa fa-envelope-o  asds'}></i>
                        </div>
                        <div className={"textInfo"}>
                            <h4>MAIL</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className={"InfoIcons"}>
                        <div className={"iconsI"}>
                            <i className={'fa fa-map-marker'}></i>
                        </div>
                        <div className={"textInfo"}>
                            <h4>LOCATION</h4>
                            <p>7784 Diamonds street, California, US.</p>
                        </div>
                    </div>
                    <div className={"InfoIcons InIc"}>
                        <div className="TextIcons">
                            <h4>SHARE ON :</h4>
                        </div>
                        <div className={'DisHov'}>
                            <div className="hoverIcons ">
                                <div className={'hoverIcons1 FB'}><i className={'fa fa-facebook'}></i></div>
                            </div>
                            <div className="hoverIcons ">
                                <div className={'hoverIcons1 TW'}><i className={'fa fa-twitter'}></i></div>
                            </div>
                            <div className="hoverIcons ">
                                <div className={'hoverIcons1 IS'}> <i className={'fa fa-instagram'}></i></div>
                            </div>
                            <div className="hoverIcons ">
                                <div className={'hoverIcons1 LK'}> <i className={'fa fa-linkedin'}></i></div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={'ForMoreInfo InpDv'}>
                    <h2>CONTACT <span> FORM</span></h2>
                    <form action="">
                        <input type="text" placeholder={'Name'}/><br/>
                        <input type="email" placeholder={'Email'}/><br/>
                        <input type="text" placeholder={'Subject'}/><br/>
                        <textarea placeholder={'Message'} name="Message" id=""></textarea>
                        <button className={'BtnSend'}>SEND</button>
                    </form>
                </div>
            </div>
        </div>
    )
}