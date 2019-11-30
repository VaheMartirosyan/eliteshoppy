import React from 'react';

const FormWrap2 = (props) => {
   let description = '';

  if(props.state.apdateProduct.description){
    description = props.state.apdateProduct.description
   
  }
 
  return (
    <div>
      <fieldset>
        <div className="castomForms">
          <div className="BtnChak">
            <div className={'Chak123'}>
              <div className="form-group">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input"
                         id="customSwitch4" onChange={props.state.newAraivle} />
                  <label className="custom-control-label" htmlFor="customSwitch4">New arrivals</label>
                </div>
              </div>
              <div className="form-group">
                <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control-input"
                         id="customSwitchs" onChange={props.state.discont} />
                  <label className="custom-control-label" htmlFor="customSwitchs">Diconts</label>
                </div>
              </div>
            </div>


            <div className="Messege">
              <textarea className="form-control TxtArea"  rows="3" id="area"
                        name="description"
                        placeholder="Enter your description"
                        onChange={props.state.onChange}
                        defaultValue={description} >
              </textarea>
            </div>
          </div>


          <div className="SubDiv">
            <button type="submit" className="btn btn-primary">Submit</button>
            <input type="reset" className="btn btn-outline-primary"
                   style={{ margin: "5px" }} value="reset oll filds" />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default FormWrap2;
