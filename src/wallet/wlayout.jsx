import {Link, Outlet} from 'react-router-dom'

function Layout(){
    const name = "Douglas";
    const balance ="2000";

    const getDetails = async()=>{

    }

    return(

            <div className="h-screen bg-slate-800">
                <div className="flex justify-between text-2xl bg-slate-500 py-8 px-4 w-full text-white">
                    <h3>Rhon Finance</h3>
                    <h3>{name}</h3>
                    <h3>Balance {balance}</h3>
                    <h3><button className="bg-orange-600 py-3 px-3 rounded-lg">Logout</button></h3>
                </div>
                <div className="flex ">
                    <div className ="flex flex-col w-2/12 py-2 px-4 text-1xl bg-white">
                        <div>                            
                            <Link to="/details" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                                <img src="https://img.icons8.com/external-basicons-color-edtgraphics/50/null/external-Dashboard-smart-home-basicons-color-edtgraphics.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                                Details
                            </Link> 
                        </div>
                        <div className="flex" >
                            <Link to="/bills" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                                <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                                Bills
                            </Link>
                        </div>
                        <div>
                            <Link to="/withdraw" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                                <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                                Withdraw
                            </Link>
                        </div>
                        <div>
                            <Link to="/savings" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                                <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                                Savings
                            </Link>
                        </div>
                        <div>                            
                            <Link to="/transactions" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                                <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                                Transactions
                            </Link>
                        </div>
                    </div>
                    <div className="px-4 py-8 bg-slate-100 w-full">
                        <Outlet/>
                    </div>
                </div>
                <div className="w-full py-8 px-16 flex bg-slate-800 justify-between text-white text-2xl">
                    <h3><i>With you every step of the way</i></h3>
                    <h3> contact 0705280119</h3>
                </div>
            </div>
    )
}

export default Layout