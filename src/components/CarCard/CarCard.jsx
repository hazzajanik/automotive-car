import { Link } from "react-router-dom";



const CarCard = ({ car }) => {
    const { id, image, brandname, price, description } = car;
    return (
        <div>
            <Link to={`/car/${brandname}`}>
                {/* <div className="card ">
                    <figure className=" border border-black rounded-xl bg-zinc-50 flex flex-col items-center px-10 pt-10 ">
                        <img src={image} alt="Shoes" className="rounded-xl bg-slate-300  w-56" />
                        <h2 className="card-title">{brandname}</h2>
                    </figure>
                </div> */}
                
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