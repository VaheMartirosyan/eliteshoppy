import React from 'react'
import './Checkboxes.css'

export default () => {
    return(
        <form>
            <div className={'control'}>
                <div className="control-group">
                    <label className="control control-radio">
                        More convenient for shipping and delivery
                        <input type="radio" name="radio"/>
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Lower Price
                        <input type="radio" name="radio"/>
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Track your item
                        <input type="radio" name="radio" />
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Bigger Choice
                        <input type="radio" name="radio" />
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        More colors to choose
                        <input type="radio" name="radio" />
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Money back guaranteed                    <input type="radio" name="radio" />
                        <div className="control_indicator"></div>
                    </label>
                </div>
                <button className={'btn btn-success'}>Send</button>
            </div>
        </form>
    )
}