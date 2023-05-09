import {useState} from 'react'
import axios from 'axios'

function Login(){
    const[logins, setLogins] = useState({
        email_phone: "",
        password:"",
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLogins({...logins,[name]:value})
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('logins', logins);

        const submitData = async()=>{
            await axios.post("http://localhost:3002/logins", logins)
            .then((response)=>{
                console.log("login response:", response);
            })
            .catch((error)=>{
                console.log("error submitting login details",error);
                
            })
        }
        submitData();

    }


    return(
        <div>
            <div className="py-4  bg-slate-200 h-screen">
                <div className="m-auto shadow-md  my-16 px-4 text-lg bg-lime-100 rounded-lg sm:w-8/12 md-6/12 lg:w-4/12">
                    <div className="text-center text-2xl py-8 ">
                        <h2>Login here</h2>
                    </div>
                    <form className="px-8" onSubmit={handleSubmit}>
                        <label>Email/Phone</label><br/>
                        <input
                            type="text"
                            name="email_phone"
                            className="w-8/12 h-8"
                            onChange={handleChange}
                        /><br/><br/>
                        <label>Pasword</label><br/>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            className="w-8/12 h-8"
                        />
                        <div className="flex items-center mt-4">
                            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
                            >
                            Sign In
                            </button>
                            <a className="ml-24 inline-block align-baseline font-bold text-sm text-violet-500 hover:text-violet-800" href="#">
                            Forgot Password?
                            </a>
                        </div>
                    </form>
                    <div className="text-lg text-center py-4">
                        <h3><i>Not yet registered register <a href="/register" className="text-violet-400 text-2xl">here</a></i></h3>
                    </div>
                </div>            
            </div>
      </div>
    )
}

export default Login;