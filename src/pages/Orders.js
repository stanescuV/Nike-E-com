import React, {useEffect, useState} from 'react'
import { useAuth } from '../contexts/AuthContext';

function Orders() {

     const {currentUser}= useAuth();
    
    //date orderID
    const [date, setDate] = useState([]);
    //date orderDetails
    const[ordDetails, setOrdDetails] = useState([]);
    console.log(currentUser)
    //fetch to get the current user's orders 
    useEffect(()=>{
        fetch(`http://localhost:3001/orders/O99a89TUPaWFNnvePaFNqckOuN92`)
        .then(binar => binar.json())
        .then(json => setDate(json))

    },[])
    
    //fetch to get the current user's detailed orders
    useEffect(()=>{
        fetch(`http://localhost:3001/orders/O99a89TUPaWFNnvePaFNqckOuN92/3`)
        .then(binar => binar.json())
        .then(json => setOrdDetails(json))
    },[])
    
     console.log(date)

     function renderDate (date){
        return date.map(comanda=> {return (
            <div>
                OrderID : {comanda.orderID}
                Total : {comanda.total}
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
        {date && renderDate(date)}
        {ordDetails&& renderOrdDetails(ordDetails)}
        
    </div>
  )
}

export default Orders