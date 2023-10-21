import { useEffect, useState } from "react";
import SingleCart from "../SingelCart/SingleCart";

const MyCart = () => {

    const [carts,setCarts]= useState([])
  


    useEffect(()=>{
        fetch("https://automotive-server-side-lemon.vercel.app/cart")
        .then(res=>res.json())
        .then(data => setCarts(data))
    },[])

    return (
        <div>
                {
                    carts.map(cart =><SingleCart key={cart._id} cart={cart}></SingleCart> )
                }
        </div>
    );
};

export default MyCart;