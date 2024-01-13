import React from "react";

type orderItemsProps = {
    orderItem: Menu;
    onRemove: () => void;
};

const OrderItem: React.FC<orderItemsProps> = ({ orderItem, onRemove }) => (
    <div className='itemBox'>
            <span className='itemSpan'>
              x{orderItem.count} {orderItem.name} - Price: {orderItem.price * orderItem.count} KGZ
            </span>
            <button className='removeBtn' onClick={onRemove}>X</button>
          </div>
);

export default OrderItem;