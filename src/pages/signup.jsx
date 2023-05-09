import {useState} from 'react'
import axios from 'axios'
function Signup(){

    const [registration, setRegistration] = useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        merchant_id:"",
        business_name:"",
        location:""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value=e.target.value;

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
        <div className="bg-slate-200 py-8 h-screen">
            <div className="w-4/12 m-auto bg-slate-200 shadow-xl rounded-lg px-4 text-lg">
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
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                            >
                            Sign Up
                            </button>
                        </div>
                </form>
                <div className="text-lg text-center py-4">
                    <h3><i>Already signup login <a href="/login" className="text-sky-400 text-2xl">here</a></i></h3>
                </div>
            </div>            
        </div>
        </>
    )
}

export default Signup;