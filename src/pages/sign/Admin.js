import React,{ useState, useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const [admin, setAdmin] = useState("");
    const [itemActive, setItemActive] = useState(false);
    const [date, setDate] = useState([]);
    const [input, setInput] = useState("");
    const [price, setPrice]= useState(0);
    const { currentUser, signInAdmin } = useAuth();
    const emailRef = useRef();
    const passwordRef= useRef();
    const discountRef = useRef();


    //fetch each time a letter is tpyed, and return a filtered array
    /* in loc sa fac filter pe client ar trebui sa fac filter in DB */
    function fetchData(searchedLetter){
    fetch(`http://localhost:3001/data?q=${searchedLetter}`) // /data?q=${searchedLetter}
    .then((r) => r.json())
    .then((rr) => {
        console.log(rr)
        const result = rr.filter((item)=>{
            return searchedLetter && item.name.toLowerCase().includes(searchedLetter);
        });
        setDate(result);
    })
    }

    
    
    //div for admin login
    const divLogin = 
    (
    <div >
        <h2>Ready to Sign In Mr Admin?</h2>
        {/*Email ref */}
        <div className="input-container">
            <label>Username </label>
            <input type="text" name="email" ref={emailRef}  />
        </div>
        {/*Password ref */}
        <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" ref={passwordRef} />
        </div>
        <button onClick={()=> {handleSignInAdmin()}}>Submit </button>
    </div>
     );
    
    //function that takes data and renders it 
    const divWithDate = (date)=>{
        
        return date.map((item)=>(
            <div>
               {itemActive ? <>
                <div onClick={()=>{handleChange(item.name)}}>{item.name}</div>
                <div>
                    <img src={item.src} style={{width:"60px", height:"60px"}}></img>
                    <>Current price</>
                    <input defaultValue={item.current_price} onChange={(e)=>setPrice(e.target.value)}></input>
                    <button onClick={()=>modifyPrice(item)}>Submit New price</button>
                </div>
                <br />
                </> : <div onClick={()=>{handleChange(item.name),setItemActive(true)}}>{item.name}</div> }
            </div>
        ))
    }

    /*fetch discount 
    function fetchDiscount (){
        fetch("http://localhost:3001/discount", {method: "POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify({discount: discountRef.current.value, date: dateRef.current.value})})
    }


    sign in admin*/
   

    //function to log the admin 
    async function handleSignInAdmin(){
        setAdmin(await signInAdmin(emailRef.current.value, passwordRef.current.value,setAdmin));
        await fetchData();
    }

    //function that takes a the letter typed and puts in to the other functions as a parameter
    const handleChange = (searchedLetter)=>{
        const letter = searchedLetter.toLowerCase()
        setInput(searchedLetter);
        setItemActive(false);
        fetchData(letter);
    }

    // modify current price
    async function modifyPrice(item){
        let newPrice = Number(price);
        try{
            fetch("http://localhost:3001/price-db",
            {method:"POST", 
            headers :{"Content-Type" :"application/json"},
            body: JSON.stringify({itemID : item.id, itemPrice : newPrice})} )
            .then(alert("Price has been modified"))
        } catch (err){console.log(err)}
    }
   

    return (
    
    <div className="form-sign-in">
        {admin && admin.length>0 && 
        <>
            <h2>Sa traiti Sefu ! </h2>

            <p>Here are the products : </p>
            <input placeholder='Search Item' value={input} onChange={(e)=> handleChange(e.target.value) } ></input>
            {date && date.length>0 && divWithDate(date)}
            {/*Discount 
             <input type='number' ref={discountRef}></input>
            <input type= "date" ref={dateRef}></input>
            <button onClick={()=>{fetchDiscount()}}> Submit</button> */}
        </>}
        {!admin && divLogin}
    </div>
    
    )
}

export default Admin