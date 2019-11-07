import React from 'react';

const FormWrap2 = ({ onChange, state, swith, womenSwith, newAraivle }) => {
  return (
    <div>
      <fieldset>

        <div className="castomForms">
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input"
                disabled={state.women_products} id="customSwitch2" onChange={swith} />
              <label className="custom-control-label" htmlFor="customSwitch2">Mean`s wear</label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input"
                disabled={state.men_products} id="customSwitch3" onChange={womenSwith} />
              <label className="custom-control-label" htmlFor="customSwitch3">Womean`s wear</label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input"
                id="customSwitch4" onChange={newAraivle} />
              <label className="custom-control-label" htmlFor="customSwitch4">New arrivals</label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input"
                id="customSwitchs" onChange={newAraivle} />
              <label className="custom-control-label" htmlFor="customSwitchs">Diconts</label>
            </div>
          </div>
          <textarea className="form-control" rows="3" id="area"
            name="description"
            placeholder="Enter your description"
            onChange={onChange} >
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
