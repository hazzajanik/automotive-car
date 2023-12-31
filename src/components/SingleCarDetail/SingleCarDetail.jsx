import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleCarDetail = () => {
    const [single, setSingle] = useState({});
    const { _id, brandname, productname, image, ratting, price, description } = single;
    const { id } = useParams();
    const allCar = useLoaderData();


    useEffect(() => {

        const singleCar = allCar.find(car => car._id == id)
        setSingle(singleCar)
    }, [])


    const handleCart = () =>{
        const { _id, brandname, productname, image, ratting, price, description } = single;
        const addCartdata = { _id, brandname, productname, image, ratting, price, description };
        console.log(addCartdata)
          // send data to the server
          fetch('https://automotive-server-side-lemon.vercel.app/cart',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(addCartdata)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                toast.success('Successfully Add!')
            }
        })
    }

    return (
        <div className=' container mx-auto px-10 flex items-center justify-center mt-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <img className='' src={single?.image} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{productname}</h2>
                    <p>Price : {price}</p>
                    <p className='flex items-center gap-2'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <span>({ratting})</span></p>
                   
                    <div className="card-actions justify-center">
                        <button className="btn bg-black text-white hover:bg-zinc-900" onClick={handleCart}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div><Toaster/></div>
        </div>
    );
};

export default SingleCarDetail;