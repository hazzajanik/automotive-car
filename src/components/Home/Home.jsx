import { useLoaderData } from "react-router-dom";
import Banner from "../Header/Banner";
import CarCard from "../CarCard/CarCard";
import About from "../About/About";
import Service from "../Service/Service";


const Home = () => {

    const cars = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center my-5 font-bold text-4xl">Chooss Your Favourite Car</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto px-10 mb-28">
            
            {
                cars.map(car=> <CarCard key={car.id} car={car}></CarCard>)
            }
            </div>
            <Service></Service>
            <About></About>

        </div>
    );
};

export default Home;