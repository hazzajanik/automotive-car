import Swal from 'sweetalert2'


const AddProduct = () => {
    
    const hundleAddProduct = event =>{
        event.preventDefault();

        const form = event.target;
        const productname = form.productname.value;
        const image = form.image.value;
        const brandname = form.brandname.value;
        const price = form.price.value;
        const description = form.description.value;
        const ratting = form.ratting.value;

        const newcar = {productname,image,brandname,price,description,ratting}
       

        // send data to the server
        fetch('https://automotive-server-side-lemon.vercel.app/car',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newcar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (

        <div className="flex justify-center">
            <div className="md:w-1/2">
                <form onSubmit={hundleAddProduct} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" name="productname" placeholder="Product Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="ratting" placeholder="Rating" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black rounded-3xl text-white font-semibold hover:bg-zinc-900">Add Product</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddProduct;