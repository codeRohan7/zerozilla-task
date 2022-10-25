import React, { useEffect, useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import {getProductDetail } from './authenticationApis';

function List() {
    const [productItem, setproductItem] = useState([])

    let { id } = useParams();

   useEffect(() => {
        getProductDetail(id).then((res)=>{
            setproductItem(res)
        })
    
   }, [id])
  return (
<>

<div class="container mt-5">
<div class="card">
    <div class="container-fliud">


{productItem ?  (<div class="wrapper row">
<div class="preview col-md-6">
    
    <div class="preview-pic tab-content">
      <div class="tab-pane active" id="pic-1"><img  className='w-100' src={productItem?.image} /></div>
      
    </div>
   
    
</div>
<div class="details col-md-6">
    <h3 class="product-title">{productItem?.title}</h3>
    
    <p class="product-description">{productItem?.description}</p>
    <h4 class="price">current price: <span>$180</span></h4>
   
   
    <div class="action">
        <button class="add-to-cart btn btn-default" type="button">add to cart</button>
    </div>
</div>
</div>):""}    
   
        
   
        
    </div>
</div>
</div>
</>

  )
}

export default List