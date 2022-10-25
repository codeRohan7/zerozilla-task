import React, { useEffect, useState } from 'react'
import { Button, CssBaseline, Grid, List, Typography } from "@mui/material";
import { useNavigate,useHistory  } from "react-router";


import 'react-toastify/dist/ReactToastify.css';
import { gertAllCateogies, getCateogiesItem ,getProductDetail } from './authenticationApis';
const DashBoard = (props) => {
const [AllCategoryState,setAllCategoryState] = useState('')
const [CategoryItem,setCategoryItem] = useState('')
const [productItem,setproductItem] = useState('')

const Navigate = useNavigate()
    useEffect(() => {
        gertAllCateogies().then((res)=>{
            setAllCategoryState(res)
        })
    }, [])
    
   

const getCategoryItem =(item)=>{
    getCateogiesItem(item).then((res)=>{
        setCategoryItem(res)
    })
}

const getProduct =(id)=>{
    getProductDetail(id).then((res)=>{
        setproductItem(res)
    })
    Navigate(`list/${id}`)
}
    return <>
        <CssBaseline />
        <nav className="navbar navbar-light bg-light" >
        <Button className='mt-2' variant="outlined" > logo</Button>
            <input className="navbar-brand" placeholder='search...' />
          

            <Button variant='contained' color='warning' size='large' >profile</Button>
        </nav>
        <div>
        {AllCategoryState && AllCategoryState.length>0 &&  AllCategoryState.map((item)=>{
            return(
                <>
                <ul className="list-group">
                
                <li className="list-group-item" onClick={()=>getCategoryItem(item)}>{item}</li>
              </ul>
                </>
            )
        })}
        </div>
       
        <div className="d-flex">
        {CategoryItem && CategoryItem.length>0 &&  CategoryItem.map((item)=>{
            
            return(

                <div class="card" style={{width: "18rem"}}  onClick={()=>getProduct(item?.id)}>
                 <img class="card-img-top" src={item?.image} alt="Card image cap"/>
                     <div class="card-body">
                   <p class="card-text">{item?.title}</p>
                 </div>
              </div>
            )
        })}
        </div>
       
     

    </>
}
export default DashBoard;