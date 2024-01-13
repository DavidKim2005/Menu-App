import React, { useState } from 'react';
import './App.css';
import { PRODUCTS } from './constants';
import OrderItem from './orderItem';

function App() {
  const [orderItems, setOrderItems] = useState<Menu[]>([]);

  const addToOrder = (item) => {
    const existingItem = orderItems.find((orderItem) => orderItem.name === item.name);

    if (existingItem) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.name === item.name ? { ...orderItem, count: orderItem.count + 1 } : orderItem
        )
      );
    } else {
      setOrderItems([...orderItems, { ...item, count: 1 }]);
    }
  };

  const totalPrice = orderItems.reduce((acc, orderItem) => acc + orderItem.price * orderItem.count, 0);

  const removeOrderItems = (index) => {
    const updateOrderItems = [...orderItems];
    updateOrderItems.splice(index, 1);
    setOrderItems(updateOrderItems)
  }

  return (
    <div className="mainMenu">
      <div className="orderMenu">
        <h2>Order Menu</h2>
        {orderItems.map((orderItem, index) => (
          <OrderItem key={index} orderItem={orderItem} onRemove={() => removeOrderItems(index)} />
        ))}
        {orderItems.length === 0 && <p>Order is empty!</p>}
        <div className='totalPrice'>
          <b>Total Price: {totalPrice} KGZ</b>
        </div>
      </div>
      <div className="foodMenu">
        {PRODUCTS.map((item) => (
          <div key={item.name} className="foodItem" onClick={() => addToOrder(item)}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: {item.price} KGZ</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
