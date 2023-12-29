import React,{useEffect, useState} from 'react'
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const [date, setDate] = useState([]);
    const { currentUser } = useAuth();

    useEffect(()=>{
        if(currentUser){
            try{
            fetch(`http://localhost:3001/admin/${currentUser.uid}`)
            .then((r)=>r.json())
            .then((rr)=> {setDate(rr); console.log(rr)}) 
            } catch(err){ console.log(err)}
        }   
    },[currentUser])

    return (
    <>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"200px"}}>{ date.length && date[0].is_admin ? <>You are an Admin</> : <> You are not an Admin</>}</div>
    </>
    )
}

export default Admin