import React from 'react';

const FormWrap = ({ onChange }) => {
  const products = ['onChangeimg', 'Wallets', 'Footwear', 'Watches', 'Accessories', 'Bags', 'Swimwear',
    ' Caps & Hats', 'Jewellery', 'One', 'Sunglasses', 'Perfumes', 'Beauty', 'Shirts', 'Sunglasses']
  return (
    <fieldset>
      <legend> Goods registration</legend>
      <div className="form-group">
        <div className="inputs">
          <div className="form-group">

            <input type="text" className="form-control" id="username" onChange={onChange} placeholder="Goodsname"
              name="goods_name" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <select className="custom-select" name="cotegory" defaultValue={'DEFAULT'} onChange={onChange}>
          <option value="DEFAULT" disabled>Choose a product kategory</option>
          {products.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })}

        </select>
      </div>
      <div className={`form-group `}>

        <input type="number" className={`form-control`} name="price" placeholder="price" onChange={onChange} />
      </div>
      <div className={`form-group `}>

        <input type="number" className={`form-control`} name="productCountInSok" placeholder="product count in stok "
          onChange={onChange} />
      </div>
    </fieldset>
  );
}

export default FormWrap;
