import React from 'react';

const FormWrap = ({ onChange,apdeitProduct }) => {
  const products = [ 'Wallets', 'Footwear', 'Watches', 'Accessories', 'Bags', 'Swimwear',
  'Caps & Hats', 'Jewellery', 'SunGlasses', 'Perfumes', 'Beauty', 'Shirts','Shoes','Trousers','Pants','Clothing','Swimwear']
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
 
  return (
    <fieldset>
      <legend> Goods registration</legend>
      <div className="form-group">
        <div className="inputs">
          <div className="form-group">

            <input type="text" className="APInp1" defaultValue = {productForApdate} onChange={onChange} placeholder="Goodsname"
              name="goods_name" />
          </div>
        </div>
      </div>
      <div className="form-group">

        <select className="SelOne" name="cotegory" defaultValue={apdeitProduct.goods_name?cotegory:"DEFAULT"} onChange={onChange}>

          <option value="DEFAULT" disabled>Choose a product kategory</option>
          {products.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })}
          </select>

          <select className=" SelTwo" name="productCotegory" defaultValue={apdeitProduct.goods_name?productCotegorys:"DEFAULT"} onChange={onChange}>

          <option value="DEFAULT" disabled>Choose productCotegory </option>
          {productCotegory.map((item, i) => {
            return <option key={i+10} value={item}>{item}</option>
          })}

        </select>

      
      </div>
      <div className={`form-group `}>

        <input type="number" className={'APInp1'} name="price" placeholder="price" defaultValue={price} onChange={onChange} />
      </div>
      <div className={`form-group `}>

        <input type="number" className={'APInp1'} name="productCountInSok" placeholder="product count in stok "
          onChange={onChange} defaultValue={stok}/> 
      </div>
    </fieldset>
  );
}

export default FormWrap;
