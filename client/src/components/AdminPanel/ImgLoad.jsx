import React from 'react';

const ImgLoad = (props) => {
 
    return (

        <div className="">
            <div className="ImgLoadInp">
            <input type="file" name="img" className="btn btn-outline-secondary" onChange={props.onChangeimg.onChangeimg} style={{width:"100%"}} />
           
           {props.onChangeimg.apdateProduct.err?<span style={{color:"red"}}>file dont loaded </span>
           :props.onChangeimg.apdateProduct.data?<span style={{color:"green"}}>file loaded sucsefuly</span>:null}
          
           
                <div>
                    <button type="button" onClick={props.onImgSubmit} className="btn btn-primary">send IMG</button>

                </div>
            </div>

        </div>

    );
}

export default ImgLoad;

