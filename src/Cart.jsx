import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart({ cartItems, removeFromCart }) {
  // Calculate total price
  const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-danger">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <div className="d-flex align-items-center">
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, marginRight: 16 }}
                  />
                )}
                <div>
                  <strong>{item.title}</strong><br />
                  <small>{item.desc}</small><br />
                  <span className="text-muted">Quantity: {item.quantity || 1}</span>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <span className="badge bg-success mb-2">₹{item.price * (item.quantity || 1)}</span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeFromCart(item.title)}
                  title="Remove one item"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-end">
        <h4>Total: ₹{total}</h4>
      </div>
    </div>
  );
}

export default Cart;