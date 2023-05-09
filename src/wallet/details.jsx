


function Details(){

    return(
        <>
            <div>
                <div className="px-6 py-6 flex justify-between border-dashed border-2 border-gray-400 rounded-lg">
                    <div>
                        <img src="https://img.icons8.com/pastel-glyph/64/null/person-male--v3.png"/>
                    </div>
                    <div>
                        <h3>Name</h3>
                        <h3>Location</h3>
                    </div>
                    <div>
                        <button className="py-2 px-2 bg-gray-700 rounded-lg text-white ">Upload</button>
                    </div>
                </div>
                <div className="py-6 px-4 text-4xl">
                    <h3><i>Merchant Information:</i></h3>
                </div>
                <div className="flex py-6 px-4 border-dashed border-2 border-gray-400 leading-8 rounded-xl">
                    <div className="">
                        <h3>Business Location:</h3>
                        <h3>Phone number:</h3>
                        <h3>Location:</h3>
                        <h3>Email:</h3>
                    </div>
                    <div className="ml-8">
                        <h3>Location</h3>
                        <h3>0700000000</h3>
                        <h3>Litein</h3>
                        <h3>Merchant@gmail.com</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;