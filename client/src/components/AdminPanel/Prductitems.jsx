import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import SimpleModal from './material UI/Modal'






const Prductitems = ({products,deletItem,apdateProduct}) => {

   
return (
<div>


    <table className="table table-hover">

        <thead>
            <tr>
                <th scope="col">Img</th>
                <th scope="col">productCotegory</th>
                <th scope="col">Brend</th>
                <th scope="col">Prodct count</th>
                <th scope="col">Product Type</th>
                <th scope="col">Price</th>
            </tr>
        </thead>

            <tbody>
                {products.map((item,i)=>{

                return <tr key={i} className="table-active" >
                    <th scope="row"><img src={`./img/${item.img}`} width="50px" height="50px" alt={item.category} />
                    </th>
                    <th>{item.productCotegory}</th>
                    <td>{item.goods_name}</td>
                    <td>{item.stok}</td>
                    <td>{item.cotegory}</td>
                    <td>{item.price}$</td>

                    <td>{item.NewArrivals}</td>
                    <td>{item.discont}</td>
                    <td><CreateIcon onClick ={()=>apdateProduct(item)}

                     style={{color:"green",
                     cursor:'pointer',fontSize:'x-large'}}
                      /></td>
                    <td><SimpleModal deletItem={{id:item._id,del:deletItem}}/></td>

                </tr>
                })}
            </tbody>


    </table>
</div>
);
}

export default Prductitems;