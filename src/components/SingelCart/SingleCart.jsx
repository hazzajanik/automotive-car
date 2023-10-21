import React from 'react';
import toast from 'react-hot-toast';

const SingleCart = ({cart}) => {
    const {_id,productname,image,brandname,price,description,ratting} = cart;


    const handleDelete = ( id ) => {
        fetch(`https://automotive-server-side-lemon.vercel.app/cart/${id}`,{
            method:"DELETE",

        })
        .then(res => res.json())
        .then(data => 
            
           {
            if(data){
            toast("Successfully Deleted!")
            }
           }
            
            )
    }


    
    return (
        <div className='container mx-auto px-10 mt-10'>
            <div className='flex flex-col items-center justify-center'>
            <img className='w-56' src={image} alt="" />
            <p className='text-2xl font-semibold my-5'>{productname}</p>
            <button onClick={()=>handleDelete(_id)} className='btn bg-slate-800 btn-primary'>Delete</button>
            </div>
        </div>
    );
};

export default SingleCart;