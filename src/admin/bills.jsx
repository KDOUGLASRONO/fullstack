import{useState, useEffect} from 'react'
import axios from 'axios';

function bills(){
    const[bills, setBills] = useState([])

    const[createBill, setCreateBill] = useState({
        id:Date.now(),
        name:"",
        period:"",
        amount:"",
    })
    const[show, setToggle] = useState(false)

    const handleChange = (e)=>{
        const name= e.target.name;
        const value = e.target.value;
        setCreateBill({...createBill,[name]:value});
        console.log("bills,", createBill)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        //check if bill exist
        console.log("current bill", createBill);
        const array = bills.map((item)=>item.name.toLowerCase())
        console.log("database bills,", array)
        if(array.indexOf(createBill.name.toLowerCase())<0){
            console.log("bill does not exist");
            setBills([...bills,createBill])
            console.log("new all bills", bills);
        
            const postBills=async()=>{
                axios.post('http://localhost:3002/bills',createBill)
                .then((response)=>{console.log("response: ", response)})
                .catch((error)=>{console.log("error: " + error)})
            }
            postBills()
        }
        else{
            console.log("bill already exists");
            alert("bill already exists");
            return;
        }
    }
    useEffect(()=>{
        const getBills = async()=>{
            await axios.get('http://localhost:3002/bills')
            .then(response=>{
                console.log("database response: ", response.data);
                setBills(response.data);
                console.log("database bills", bills)
            })
            .catch((error)=>{console.log("get bills error: " + error)})
        }
        getBills();
    },[])
    return(
        <>
            <div className='flex justify-between px-8 py-4 text-2xl'>
                <h2>NAME</h2>
                <h2>PERIOD</h2>
                <h2>AMOUNT</h2>
                <button onClick={(e)=>setToggle(!show)} className="py-2 px-4 bg-slate-300 rounded-lg">Add Bill</button>
            </div>
            <div className='w-full px-4 py-4 bg-slate-200 rounded-lg'>
                    {bills.map((item)=>{
                        return(
                            <div className='my-2 py-4 px-4 bg-slate-300 text-2xl flex justify-between' key={item.id}>
                                <h3>{item.name}</h3>
                                <h3>{item.period}</h3>
                                <h3>{item.amount}</h3>
                                <button className="py-2 px-4 bg-slate-300 rounded-lg">edit</button>
                            </div>
                        )
                    })}
            </div>
            {show?
            <div className="w-10/12 absolute top-28 h-screen backdrop-brightness-50">
                <div className="m-auto w-6/12 my-0 bg-slate-600 py-4 px-4 rounded-lg">
                    <h2 className="my-8 text-2xl text-center text-white"><i>Add Bill</i></h2>
                    <form onSubmit = {handleSubmit}>
                        <label className="text-2xl py-4 text-white">Bill name</label><br/>
                        <input
                            type="text"
                            name="name"
                            onChange ={handleChange}
                            className='text-2xl px-2 py-2 bg-slate-50 rounded-lg w-8/12 my-4 border-s-slate-200'
                        /><br/>
                        <label className="text-2xl py-4 text-white">Period</label><br/>
                        <select 
                            name="period"
                            onChange={handleChange}
                            className='text-2xl px-2 py-2 bg-slate-50 rounded-lg w-8/12 my-4 border-s-slate-200'>
                            <option></option>
                            <option value="1 week">1 week</option>
                            <option>2 weeks</option>
                            <option>Monthly</option>
                            <option>Yearly</option>

                        </select>
                        <br/>
                        <label className="text-2xl py-4 text-white">Amount</label><br/>
                        <input
                            type="number"
                            name="amount"
                            onChange ={handleChange}
                            className='text-2xl px-2 py-2 bg-slate-50 rounded-lg w-8/12 my-4 border-s-slate-200'
                        /><br/>
                        <div className='text-right mr-8 mt-4'>
                            <button className='py-2 px-8 bg-white rounded-lg hover:bg-slate-300'>Submit</button> 
                        </div>
                    </form>
                    <div className='text-right mr-8 mt-4'>
                        <button onClick={(e)=>setToggle(!show)} className='py-2 px-8 bg-rose-600 rounded-lg hover:bg-slate-300'>Cancel</button> 
                    </div>
                </div>
            </div>
            :null
            }
        </>
    )
}
export default bills;