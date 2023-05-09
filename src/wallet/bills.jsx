


function Bills(){

    return(
        <>
            <div className="py-8 text-center text-3xl border-dashed border-2 border-slate-300">
                <h3><i>Please select your bills below</i></h3>
            </div>
            <div className=" flex justify-between px-4 text-2xl my-4 border-dashed border-2 border-slate-300 gap-8">
                <div className="py-4">
                    <label>bill</label>
                    <input 
                        type="text"
                        name="bill"
                
                    />
                </div>
                <button type="submit" onClick={(e)=>e.target.value} className="bg-gray-600 px-8 rounded-lg">Select</button>
            </div>
            <div className="px-4 py-8 border-dashed border-2 border-slate-300">
                <h2>Active bills</h2>
                <h3>List</h3>
            </div>
        </>
    )
}

export default Bills;