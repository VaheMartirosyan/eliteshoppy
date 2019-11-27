import React from 'react';

const FormWrap2 = (props) => {
   let description = '';
   let discont = false;
   let NewArrivals = false;
  if(props.state.apdateProduct.description){
    description = props.state.apdateProduct.description
    discont = props.state.apdateProduct.discont
    NewArrivals = props.state.apdateProduct.NewArrivals
  }
  
  return (
    <div>
      <fieldset>

        <div className="castomForms">
        
        
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input"
                id="customSwitch4" onChange={props.state.newAraivle} checked={NewArrivals}/>
              <label className="custom-control-label" htmlFor="customSwitch4">New arrivals</label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input"
                id="customSwitchs" onChange={props.state.newAraivle} checked={discont} />
              <label className="custom-control-label" htmlFor="customSwitchs">Diconts</label>
            </div>
          </div>
          <textarea className="form-control" rows="3" id="area"
            name="description"
            placeholder="Enter your description"
            onChange={props.state.onChange}
            defaultValue={description} >
          </textarea>
          <button type="submit" className="btn btn-primary">Submit</button>
          <input type="reset" className="btn btn-outline-primary"
            style={{ margin: "5px" }} value="reset oll filds" />
        </div>

      </fieldset>
    </div>
  );
}

export default FormWrap2;
