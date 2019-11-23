import React from 'react'

export default ({item}) => {
    return(
        <div>
            <div className={'shopCarts'}>
                <div className={'imgquick'}>
                    <img src={item} alt="shoose"/>
                    <div className={'quickdiv'}>
                        <button className={'quickbtn'} name={item}>Quick View</button>
                    </div>
                </div>

                <div className={'cartitemname'}>
                    <h4 className="title">{item}</h4>
                </div>
                <div className={'cartprice'}>
                    <span>${item}</span>
                </div>
                <span className={'new'}>New</span>
                <div className={'cartbutton'}>
                                   <span className={'cartaddhover'}>
                                       <form  >
                                       <fieldset>
                                           <input type="hidden" name="cmd" value={item}/>
                                           <input type="hidden" name="add" value="1"/>
                                           <input type="hidden" name="return" value=" "/>
                                           <input type="hidden" name="cancel_return" value=" "/>
                                           <input type="submit" name={item} value="Add to cart" className="button"/>
                                       </fieldset>
                                   </form>
                                   </span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}