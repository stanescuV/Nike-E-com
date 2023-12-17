import React, {useEffect, useState} from 'react'
import Modal from "../components/buttons/Modal"


function Orders() {
    const [date, setDate] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3001/orders/O99a89TUPaWFNnvePaFNqckOuN92`)
        .then(binar => binar.json())
        .then(json => setDate(json))
    },[])
   
     console.log(date)

     function renderDate (date){
        return date.map(comanda=> {return (
            <>
            <div>
                OrderID : {comanda.orderID}
                Total : {comanda.total}
            </div>
            <button>Detalii</button>
            </>
        )})}

  return (
    <div>
        {date && renderDate(date)}
        <Modal />
    </div>
  )
}

export default Orders