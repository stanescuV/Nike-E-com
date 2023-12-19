import React, {useEffect, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';

function Orders() {

     const {currentUser}= useAuth();
    
    //data orderID
    const [data, setData] = useState([]);
    //data orderDetails
    const[ordDetails, setOrdDetails] = useState([]);
    //fetch to get the current user's orders 
    useEffect(()=>{
        fetch(`http://localhost:3001/orders/${(currentUser && currentUser.uid)}`)
        .then(r => r.json())
        .then(rr=> setData(rr))
       
     //fetch to get the current user's detailed orders
        
       fetch(`http://localhost:3001/orders/${(currentUser && currentUser.uid)}/3`)
        .then(r => r.json())
        .then(rr => setOrdDetails(rr))
        console.log(ordDetails)
    },[currentUser])
    
    

     function renderData (data){
        return data.map(comanda=> {return (
            <div>
                OrderID : {comanda.orderID}
                Total : {comanda.total}
                <br/>
            </div>
        )})}

        function renderOrdDetails(ordDetails){
            return ordDetails.map((prod)=>{return (
                <div>
                    <p>
                    Product : {prod.name} 
                    </p> 
                    <br/>
                    <p>Product price: {prod.price}</p>
                    <br/>
                    <p>Product quantity bought: {prod.qt}</p>
                </div>
            )})
        }

  return (
    <div style={{display : "flex", justifyContent: "center",flexDirection:"column", alignItems: "center", margin: "200px"}}>
        {data && renderData(data)}
        {ordDetails&& renderOrdDetails(ordDetails)}
        
    </div>
  )
}

export default Orders