import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Orders() {
  const { currentUser } = useAuth();

  // Data orderID
  const [data, setData] = useState([]);
  // Data orderDetails
  const [ordDetails, setOrdDetails] = useState([]);
  // Selected order ID
  const [selectedOrderID, setSelectedOrderID] = useState(null);

  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch to get the current user's orders
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/orders/${currentUser && currentUser.uid}`)
      .then((r) => r.json())
      .then((rr) => setData(rr));
  }, [currentUser]);

  // Function to open/close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  

  // Function to fetch order details and open the modal
  async function handleViewDetails(orderID) {
    try {
      if (selectedOrderID !== orderID || !isModalOpen) {
        
        if(!currentUser) throw new Error(`No Current User`);
        
        const response = await fetch(`http://localhost:3001/orders/${currentUser.uid}/${orderID}`);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
       
        const orderDetailsData = await response.json();
        setOrdDetails(orderDetailsData);
        setSelectedOrderID(orderID); 
        if(!isModalOpen){
          toggleModal();
        }
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  }

  function renderData(data) {
    return data.map((comanda) => {
      return (
        <div key={comanda.orderID}>
          <div>
            OrderID: {comanda.orderID} Total: {comanda.total}$
            <button onClick={() => handleViewDetails(comanda.orderID)}>View Details</button>
          </div>
          <br />
        </div>
      );
    });
  }
//add "you do not have any order"
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', margin: '200px' }}>
      {data && renderData(data)}

      {/* Render the modal */}
      {isModalOpen && (
        <div>
          {/* Your modal content here */}
          <div>
            <h2>Order Details</h2>
            {ordDetails.map((prod) => (
              <div key={prod.productId}>
                <p>Product: {prod.name}</p>
                <p>Product price: {prod.price}$</p>
                <p>Product quantity bought: {prod.qt}</p>
                <br />
              </div>
            ))}
          </div>
          <button onClick={toggleModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default Orders;
