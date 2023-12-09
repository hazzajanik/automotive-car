import React from 'react';
import { Link } from 'react-router-dom';

const CarBrandDetail = ({ car }) => {

    const { _id, brandname, productname, image, ratting, price, description } = car;
    
    return (
        <div className=' container mx-auto px-10 mt-10'>
            <div className="card card-side bg-slate-300">
            <figure><img className='w-full h-[300px] object-cover' src={image} alt="brand" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productname}</h2>
                <p className='flex items-center gap-2'>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>

                    <span>({ratting})</span></p>
                <p>{description}</p>
                <div className="card-actions  flex">
                <Link to={`/singleCar/${_id}`}> <button className='btn bg-slate-900 btn-primary'>Details</button></Link>
                <Link to={`/updateCar/${_id}`}> <button className='btn bg-slate-900 btn-primary'>Update</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CarBrandDetail;

