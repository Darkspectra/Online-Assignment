import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { FaGoogle } from "react-icons/fa";

import { AuthContext } from "../Provider/AuthProvider";
import app from "../firebase/firebase.config";


const Login = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('')

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                navigate(location?.state ? location.state : '/')
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="bg-green-300 rounded-xl">
                <h2 className="text-4xl italic font-bold text-red-400 text-center">~Online Assignment~</h2>
                <p className="text-2xl text-center">An Efficient way to check Assignment</p>
            </div>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md: w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-3xl">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-3xl">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link to="/register" className="text-blue-800 font-bold">Register</Link></p>
            </div>
            <div>
                <button className="ml-[50%] mt-7"><FaGoogle className="text-4xl" onClick={handleGoogleSignIn}></FaGoogle></button>
            </div>
            {
                loginError && <p className="text-red-600 font-bold text-center">{loginError}</p>
            }
        </div>
    );
};

export default Login;