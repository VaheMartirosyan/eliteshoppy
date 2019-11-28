import React from 'react';

const ImgLoad = ({state,onImgSubmit,onChangeimg}) => {
    return (
        <div className="">
            <div className="ImgLoadInp">
                <input type="file" name="img" className="btn btn-outline-secondary" onChange={onChangeimg} />
                <input type="file" name="img" className="btn btn-outline-secondary" onChange={onChangeimg} />
                <input type="file" name="img" className="btn btn-outline-secondary" onChange={onChangeimg} />
                <span style={{color:"green"}}>file loaded sucsefuly</span>
                <div>
                    <button type="button" onClick={onImgSubmit} className="btn btn-primary">send IMG</button>
                </div>
            </div>

        </div>

    );
}

export default ImgLoad;

