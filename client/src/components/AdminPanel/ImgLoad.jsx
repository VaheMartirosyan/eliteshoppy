import React from 'react';

const ImgLoad = (props) => {
    console.log()
    return (

        <div className="">
            <div className="ImgLoadInp">
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={props.onImgSubmit.onChangeimg} style={{width:"100%"}} />
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={props.onImgSubmit.onChangeimg} style={{width:"100%"}} />
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={props.onImgSubmit.onChangeimg} style={{width:"100%"}} />
           { props.onImgSubmit.apdateProduct &&<span style={{color:"green"}}>file loaded sucsefuly</span>}
                <div>
                    <button type="button" onClick={props.onImgSubmit.onImgSubmit} className="btn btn-primary">send IMG</button>

                </div>
            </div>

        </div>

    );
}

export default ImgLoad;

