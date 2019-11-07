import React from 'react';

const ImgLoad = ({state,onImgSubmit,onChangeimg}) => {
    return (
        <div>
        <div className="imgSender">
                <div >
                <div className="form-group">
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={onChangeimg} style={{width:"100%"}} />
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={onChangeimg} style={{width:"100%"}} />
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={onChangeimg} style={{width:"100%"}} />
            <span style={{color:"green"}}>file loaded sucsefuly</span>
            <button type="button" onClick={onImgSubmit} className="btn btn-primary">send IMG</button>
            </div>
                </div>
              </div>
        </div>
    );
}

export default ImgLoad;

