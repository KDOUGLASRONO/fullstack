


function Withdraw(){

    return(
        <>
            <div className="my-12 text-center border-dashed border-2 border-gray-600 py-8">
                <div className="text-2xl">
                    <h3>Account balance: <span>3000</span></h3>
                </div>
                <div>
                    <form className="leading-8">
                        <input
                            type="number"
                            name="amount"
                            className="w-2/12 mt-4 border-solid border-2 border-gray-400"
                        /><br/>
                        <button className="w-2/12 bg-gray-600 px-4 py-1 my-4 rounded-lg text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Withdraw;