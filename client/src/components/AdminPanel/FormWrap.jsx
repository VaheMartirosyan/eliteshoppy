import React from 'react';

const FormWrap = ({ onChange,apdeitProduct }) => {
  const products = ['onChangeimg', 'Wallets', 'Footwear', 'Watches', 'Accessories', 'Bags', 'Swimwear',
    ' Caps & Hats', 'Jewellery', 'One', 'Sunglasses', 'Perfumes', 'Beauty', 'Shirts', 'Sunglasses']
  const productCotegory = ['womensProduct','meanProduct','chaiildrenProduct'] ;
  let productForApdate =  '';
  let cotegory = '';
  let productCotegorys = '';
  let price = '';
  let stok = '';
  if(apdeitProduct.goods_name){
    productForApdate = apdeitProduct.goods_name;
    cotegory = apdeitProduct.cotegory;
    productCotegorys = apdeitProduct.productCotegory;
    price = apdeitProduct.price;
    stok = apdeitProduct.stok
  }
  console.log(productForApdate);
  return (
    <fieldset>
      <legend> Goods registration</legend>
      <div className="form-group">
        <div className="inputs">
          <div className="form-group">

            <input type="text" className="form-control" defaultValue = {productForApdate} onChange={onChange} placeholder="Goodsname"
              name="goods_name" />
          </div>
        </div>
      </div>
      <div className="form-group">
        <select className="custom-select" name="cotegory" defaultValue={cotegory} onChange={onChange}>
          <option value="DEFAULT" disabled>Choose a product kategory</option>
          {products.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })}
          </select>
          <select className="custom-select" name="productCotegory" defaultValue={productCotegorys} onChange={onChange}>
          <option value="DEFAULT" disabled>Choose productCotegory </option>
          {productCotegory.map((item, i) => {
            return <option key={i+10} value={item}>{item}</option>
          })}

        </select>

      
      </div>
      <div className={`form-group `}>

        <input type="number" className={`form-control`} name="price" placeholder="price" defaultValue={price} onChange={onChange} />
      </div>
      <div className={`form-group `}>

        <input type="number" className={`form-control`} name="productCountInSok" placeholder="product count in stok "
          onChange={onChange} defaultValue={stok}/> 
      </div>
    </fieldset>
  );
}

export default FormWrap;
