import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CarBrandDetail from '../CarBrandDetail/CarBrandDetail';

const CarBrand = () => {
    const [cars, setCars] = useState([]);

    const { id } = useParams();
    const carTotal = useLoaderData();

    useEffect(() => {
        const matchCar = carTotal.filter(car => car.brandname.toLowerCase() == id.toLocaleLowerCase())
        setCars(matchCar)
    }, [])
    return (
        <div>

            <div className="carousel h-[70vh] w-full ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Zgq2pdk/joey-banks-YApi-Wyp0lqo-unsplash.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5hc5bG0/karl-kohler-Hf1r-AKkf-MAg-unsplash.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>


                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5hc5bG0/karl-kohler-Hf1r-AKkf-MAg-unsplash.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/g9YqYrH/marek-pospisil-o-UBjd22g-F6w-unsplash.jpg" className="w-full object-cover" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>




            <div className='grid gap-5 md:grid-cols-2 '>

                {
                    cars.map(car => <CarBrandDetail key={car._id} car={car}></CarBrandDetail>)
                }


            </div>
        </div>
    );
};

export default CarBrand;