import{useState, useEffect} from 'react';

const allMerchants = 67;
const totalTransacted = 23567;
const pendingMerchants = 23;
const totalWithdrawn = 2230;


function dashboard(){

    return(
        <>
            <div className="flex gap-4 px-8 py-8">
                <div className="bg-slate-400 px-4 py-8 text-2xl rounded-lg w-3/12 text-center">
                    {allMerchants}
                    <h3>All Merchants</h3>
                </div>
                <div className="bg-slate-400 px-4 py-8 text-2xl rounded-lg w-3/12 text-center">
                    {totalTransacted}
                    <h3>Total Transacted</h3>
                </div>
                <div className="bg-slate-400 px-4 py-8 text-2xl rounded-lg w-3/12 text-center">
                    {pendingMerchants}
                    <h3>pending merchants</h3>
                </div>
                <div className="bg-slate-400 px-4 py-8 text-2xl rounded-lg w-3/12 text-center">
                    {totalWithdrawn}
                    <h3>Total Withdrawn</h3>
                </div>
                <div className="bg-slate-400 px-4 py-8 text-2xl rounded-lg w-3/12 text-center">
                    <h2>1</h2>
                    <h2>all Admins</h2>
                </div>
            </div>
        </>
    )
}
export default dashboard;