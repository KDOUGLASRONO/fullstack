import {Link, Outlet} from 'react-router-dom'

function Layout(){

    return(
        <>
        <div>
            <div className="flex justify-between px-8 py-8 text-2xl bg-white">
                <h3>RhonPesa Admin</h3>
                <button className="bg-slate-100 px-2 py-2 rounded-lg hover:bg-slate-200">Logout</button>
            </div>

            <div className ="flex w-full h-screen">
                <div className='flex flex-col w-2/12 py-2 px-4 text-1xl bg-white'>
                    <Link to="/admin/dashboard" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/external-basicons-color-edtgraphics/50/null/external-Dashboard-smart-home-basicons-color-edtgraphics.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Dashboard
                    </Link>
                    <Link to="/admin/users" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/pastel-glyph/64/null/person-male--v1.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Users
                    </Link>
                    <Link to="/admin/request" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/pastel-glyph/64/null/person-male--v1.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Pending Requests
                    </Link>
                    <Link to="/admin/Merchants" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/pastel-glyph/64/null/person-male--v1.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Merchants
                    </Link>
                    <Link to="/admin/bills" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Bills
                    </Link>
                    <Link to="/admin/transactions" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Transactions
                    </Link>
                    <Link to="/admin/verify" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Verify Transactions
                    </Link> 
                    <Link to="/admin/withdrawals" className="my-2 px-4 py-1 flex rounded-lg hover:bg-slate-200">
                        <img src="https://img.icons8.com/ios/50/null/refund-2.png" className="bg-slate-300 rounded-xl h-10 mr-4"/>
                        Withdrawals
                    </Link>
                </div>
                <div className='bg-gray-100 w-10/12'>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Layout;