import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateCar = () => {
    const [containCar, setContainCar]= useState({});


    const { _id, image,productname, brandname, price, description,ratting} = containCar;

    const {id} = useParams();
    const car = useLoaderData();

    useEffect(()=>{
        const updatematch = car.find(carOne => carOne._id === id)
        setContainCar(updatematch)
    },[])

   
    const hundleUpdateProduct = event =>{
        event.preventDefault();



     

        const form = event.target;
        const productname = form.productname.value;
        const image = form.image.value;
        const brandname = form.brandname.value;
        const price = form.price.value;
        const description = form.description.value;
        const ratting = form.ratting.value;

        const  containCar = { _id, image, brandname, price, description,ratting,productname }

       

        // send data to the server
        fetch(`https://automotive-server-side-lemon.vercel.app/car/${_id}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(containCar)
        })
        .then(res => res.json())
        .then(data =>{
            toast.success('updated successfully')
        
        })
    }

    return (
        <div>

            

            <h1 className="text-3xl font-bold text-center">Update car</h1>
            <div className="flex justify-center">
            <div className="md:w-1/2">
                <form onSubmit={hundleUpdateProduct} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productname" placeholder="Product Name" className="input input-bordered" defaultValue={productname} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brandname" defaultValue={brandname}  placeholder="Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="ratting" defaultValue={ratting} placeholder="Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black rounded-3xl text-white font-semibold hover:bg-zinc-900">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateCar;