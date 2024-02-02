import React,{ useState,useEffect, useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const [admin, setAdmin] = useState("");
    const [listOfProducts, setListOfProducts] = useState([]);
    const [itemActive, setItemActive] = useState(false);
    const [date, setDate] = useState([]);
    const [input, setInput] = useState("");
    const [price, setPrice]= useState(0);
    const { currentUser, signInAdmin } = useAuth();
    //refs for auth
    const emailRef = useRef();
    const passwordRef= useRef();
    //refs for discount
    const discountRef = useRef();
    const dateStartRef = useRef();
    const dateEndRef = useRef();
    const discountNameRef = useRef();



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
                    <button onClick={()=>{modifyPrice(item)}}>Submit New price</button>
                </div>
                <br />
                </> : <div onClick={()=>{handleChange(item.name),setItemActive(true)}}>{item.name}</div> }
            </div>
        ))
    }

    //fetch discount 
    function fetchDiscount (){
        fetch("http://localhost:3001/discount",
         
        {method: "POST",
        headers:{"Content-Type": "application/json"}, 
        body:JSON.stringify({discount: discountRef.current.value, dateStart: dateStartRef.current.value, dateEnd: dateEndRef.current.value, discountName: discountNameRef.current.value, products: filterList(listOfProducts)})})
    }

    
    //fetch for products
    useEffect(()=>{fetchProducts()},[]);
    
    
    // internal fetch discount 
    function fetchProducts (){
        fetch("http://localhost:3001/products-discounts")
        .then((r) => r.json())
        .then((products) => {
            // Add a 'checked' property to each product
            const productsWithChecked = products.map(product => ({ ...product, checked: false }));
            setListOfProducts(productsWithChecked);
        });
    }   

        
    
   
    function handleCheckboxChange(product) {
        // Update the checked state of the product
        const updatedProducts = listOfProducts.map(p => {
            if (p.id === product.id) {
                return { ...p, checked: !p.checked };
            }
            return p;
        });
         setListOfProducts(updatedProducts);
    }

    //create checkbox for each data
    function renderProducts(products){
        return products.map((product, index) => {
             return (
                 <div key={index} style={{display: "flex", justifyContent:"space-between", alignItems:"center" }}>
                     <label style={{marginRight:"10px" }}>{product.id + " " + product.name}</label>
                     <input
                      type="checkbox"
                      checked={product.checked}
                      onChange={() => handleCheckboxChange(product)}
                     />
                 </div>
             );
         });
     }
     
    //list of products filtered
    function filterList (listOfProducts){
      return listOfProducts.filter((item)=> item.checked === true)
    }
     
    

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
        console.log(newPrice + " And the ID :" + item.id )
        try{
            fetch("http://localhost:3001/price-db",
            {method:"POST", 
            headers :{"Content-Type" :"application/json"},
            body: JSON.stringify({itemID : item.id, itemPrice : newPrice})} )
            .then(alert("Price has been modified"))
        } catch (err){console.log(err)}
    }
   

    return (
    
    <div className="form-sign-in" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        {admin && admin.length>0 && 
        <>
            <div style={{ border:"1px solid black", margin:"15px", padding:"20px"}}>

            <h2>Sa traiti Sefu ! </h2>

            <p>Search for the products : </p>
            <input placeholder='Search Item' value={input} onChange={(e)=> handleChange(e.target.value) } ></input>
            {date && date.length>0 && divWithDate(date)}
            </div>

            <div className='discounts' style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", border:"1px solid black", margin:"15px", padding:"20px"}}>
                <h2 >Discounts</h2>
                <div>
                    <label style={{marginRight:"20px"}}>Discount value</label>
                    <input placeholder="20 = 20%" type='number' ref={discountRef}></input>
                </div>
                <div >
                    <label style={{marginRight:"20px"}}>Starting Date</label>
                    <input placeholder="Starting Date" type= "date" ref={dateStartRef}></input>
                </div>
                <div>

                    <label style={{marginRight:"20px"}}>Ending Date</label>
                    <input placeholder= "Ending Date" type= "date" ref={dateEndRef}></input>
                </div>
            
                <div>
                    <label style={{marginRight:"20px"}}>Discount Name</label>
                    <input placeholder="Winter Season, EOM..." type='text' ref={discountNameRef}></input>
                </div>

                <div>{renderProducts(listOfProducts)}</div>

                <button onClick={()=>{fetchDiscount()}}> Submit</button>    
            </div>
        </>}
        {!admin && divLogin}
    </div>
    
    )
}

export default Admin