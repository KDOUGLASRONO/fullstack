import {useState, useRef, useEffect} from 'react'
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import axios from 'axios'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
function Signup(){

    const userRef = useRef()
    const errRef = useRef()

    const [registration, setRegistration] = useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        merchant_id:"",
        business_name:"",
        location:""
    })

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false)

    /* 
    useEffect(() => {
        userRef.current.focus();
    }, [])*/

    const handleChange = (e) => {
        const name = e.target.name;   
        const value = e.target.value;     
        const vStatus=USER_REGEX.test(e.target.value);
        if(!vStatus){setErrMsg("invalid input")}else{setErrMsg("valid")}
        console.log("username: " + e.target.value + value);

        setRegistration({...registration,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const submitRegistrationData = async ()=>{
            await axios.post('http://localhost:3002/registration', registration)
            .then((response)=>console.log("response status",response))
            .catch((error)=>console.log("error registering",error))
        }
        submitRegistrationData();
    }

    return(
     
        <>
        <div className="bg-slate-200 py-8 h-full">
            <div className="w-full md:w-4/12 m-auto bg-lime-100 shadow-xl rounded-lg px-4 text-lg">
                <div className="text-center text-2xl py-8 ">
                    <h2>Register here</h2>
                </div>
                <form className="px-8" onSubmit={handleSubmit}>
                    <label>First Name</label><br/>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="first name"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <label>Last Name</label><br/>
                    <input
                        type="text"
                        name="last_name"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <label>Email</label><br/>
                    <input
                        type="email"
                        name="email"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <label>Phone number</label><br/>
                    <input
                        type="number"
                        name="phone"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <label>ID Number</label><br/>
                    <input
                        type="number"
                        name="merchant_id"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <label>Business Name</label><br/>
                    <input
                        type="text"
                        name="business_name"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <label>Location</label><br/>
                    <input
                        type="text"
                        name="location"
                        onChange = {handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    /><br/>
                    <div className="flex items-center mt-4">
                            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                            >
                            Sign Up
                            </button>
                        </div>
                </form>
                <div className="text-lg text-center py-4">
                    <h3><i>Already signup login <Link to="/login" className="text-violet-600 text-2xl">here</Link></i></h3>
                </div>
            </div>            
        </div>
        </>
    )
}

export default Signup;