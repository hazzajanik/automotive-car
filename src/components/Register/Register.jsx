/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
    const { createUser } = useContext(AuthContext);


    const hundleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');


        // password validation --->
        if (password.length < 6) {
            toast.error("Password should be 6 characters or longer");
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error("Password contains at least one uppercase letter.");
            return;
        }
        else if (!(/[!@#$%^&*()+=-?]/.test(password))) {
            toast.error("Password contains at least one special character.");
            return;
        }


        // create user
        createUser(email, password)
            .then(result => {

                toast.success('Successfully Registered!')
            })
            .catch(error => {

                toast.error("You are failed in Register!")
            })
    }

    return (
        <div>
            <div className=" pb-20">
                <div className="py-10 flex items-center justify-center gap-3">
                    <h1 className="text-4xl font-bold text-center ">Register</h1>
                    
                </div>
                <div className="card flex-shrink-0 mx-auto w-full max-w-sm bg-zinc-200">
                    <form onSubmit={hundleRegister} className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="displayName" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="phone" name="phoneNumber" placeholder="Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black rounded-3xl text-white font-semibold hover:bg-gray-900">Register</button>
                        </div>
                    </form>
                </div>
                <p className="text-center">Already have an account? <span><Link to='/login' className="text-black font-bold" >Login</Link></span> </p>
            </div>
        </div>
    );
};

export default Register;