
import {Link} from 'react-router-dom';
import image from '../assets/ussd.png';

function Intro(){


    return(
        <>
            <div className="w-full grid px-0 md:grid-cols-2">
                <div className="flex flex-col justify-between pl-4 py-8 bg-gradient-to-br from-lime-100 to-white rounded-br-full ">
                    <div className="py-4 text-4xl text-indigo-800">
                        <h2><i>Payment solution Tailored to your needs</i></h2>
                    </div>
                    <div className="py-4 text-2xl">
                        <p className="leading-10">Unlock the enormous possibilities of having one payment gateway,
                            that helps you accept payments, manage your bills and 
                            access all financial services on one platform build just for you
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <Link to="/register"><button className="py-2 px-2 text-white bg-indigo-400 rounded-lg ">Get started</button></Link>
                        <Link to="/login"><button className="py-2 px-8 text-white bg-indigo-300 mx-4 rounded-lg">Login</button></Link>
                    </div>
                </div>
                <div className="text-center py-4 px-4 bg-gradient-to-bl from-lime-100 to-white rounded-bl-full"> 
                    <img src={image} className="rounded-lg mx-auto py-4" alt="Tree"/>
                </div>
            </div>
        </>
    )
}
export default Intro;