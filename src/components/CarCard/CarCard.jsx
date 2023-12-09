import { Link } from "react-router-dom";



const CarCard = ({ car }) => {
    const { id, image, brandname, price, description } = car;
    return (
        <div>
            <Link to={`/car/${brandname}`}>
                <div className="card bg-base-50 shadow-xl image-full">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body flex items-center justify-center">
                        <h2 className="card-title text-5xl  ">{brandname}</h2>
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default CarCard;