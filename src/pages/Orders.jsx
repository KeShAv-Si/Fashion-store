import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Titles from "../components/Titles";

const Orders = () => {
  const { orders, currency } = useContext(ShopContext);
  
  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Titles text1={"MY"} text2={"ORDERS"} />
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500 text-lg">No orders yet</p>
          <p className="text-gray-400 text-sm mt-2">Start shopping to see your orders here</p>
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <div
              key={order.id}
              className="py-4 border-t border-b text-gray-700 mb-4"
            >
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3"
                >
                  <div className="flex items-start gap-6 text-sm">
                    <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
                    <div>
                      <p className="text-base font-medium">{item.name}</p>
                      <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                        <p className="text-lg">
                          {currency} {item.price}
                        </p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                      <p className="text-sm md:text-base">{order.status}</p>
                    </div>
                    <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100">
                      Track Order
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="mt-3 pt-3 border-t">
                <div className="flex justify-between text-sm">
                  <p className="text-gray-600">Payment Method:</p>
                  <p className="font-medium">{order.paymentMethod === 'cod' ? 'Cash on Delivery' : order.paymentMethod}</p>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <p className="text-gray-600">Total Amount:</p>
                  <p className="font-semibold">{currency} {order.totalAmount + order.deliveryFee}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
