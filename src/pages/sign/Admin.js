import React,{ useState, useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const [admin, setAdmin] = useState("");
    const [date, setDate] = useState([]);
    const [input, setInput] = useState("");
    const { currentUser, signInAdmin } = useAuth();
    const emailRef = useRef();
    const passwordRef= useRef();
    const discountRef = useRef();
    const inputRef = useRef();


   

    function fetchData(searchedLetter){
    fetch("http://localhost:3001/data")
    .then((r) => r.json())
    .then((rr) => {
        const result = rr.filter((item)=>{
            return searchedLetter && item.name.toLowerCase().includes(searchedLetter);
        });
        setDate(result);
    })
    }
  
    

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
    
    const divWithDate = (date)=>{
        return date.map((item)=>(
            <div>
            <div onClick={()=>setInput(item.name)}>{item.name}</div>
            <br />
            </div>
        ))
    }

    //fetch discount 
    // function fetchDiscount (){
    //     fetch("http://localhost:3001/discount", {method: "POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify({discount: discountRef.current.value, date: dateRef.current.value})})
    // }


    // sign in admin
   
    async function handleSignInAdmin(){
        setAdmin(await signInAdmin(emailRef.current.value, passwordRef.current.value,setAdmin));
        await fetchData();
    }

    const handleChange = (searchedLetter)=>{
        const letter = searchedLetter.toLowerCase()
        setInput(searchedLetter);
        fetchData(letter);
    }

   

    return (
    
    <div className="form-sign-in">
        {admin && admin.length>0 && 
        <>
            <h2>Hi Mr Admin </h2>

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