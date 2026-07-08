import { useCart } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'React Course', price: 29 },
  { id: 2, name: 'Node.js Course', price: 39 },
  { id: 3, name: 'MongoDB Guide', price: 19 },
  { id: 4, name: 'AI Integration', price: 49 },
  { id: 5, name: 'n8n Automation Course', price: 39 },
  { id: 6, name: 'LangChain Masterclass', price: 59 },
];

const CartDemo = () => {
  const { cart, addToCart, removeFromCart, clearCart, total } = useCart();

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px' }}>
        Cart Demo -- Context API
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

        {/* Products */}
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
            Products
          </h2>
          {products.map((product) => (
            <div
              key={product.id}
              style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <div>
                <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                <p style={{ color: '#6b7280', fontSize: '14px' }}>${product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                style={{ padding: '6px 14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>
              Cart ({cart.length} items)
            </h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                style={{ padding: '4px 12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}
              >
                Clear Cart
              </button>
            )}
          </div>

          {cart.length === 0 ? (
            <p style={{ color: '#6b7280', textAlign: 'center', padding: '32px' }}>
              Cart is empty!
            </p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div>
                    <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.name}</p>
                    <p style={{ color: '#6b7280', fontSize: '12px' }}>
                      ${item.price} x {item.quantity} = ${item.price * item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ padding: '4px 10px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div style={{ borderTop: '2px solid #e5e7eb', paddingTop: '12px', marginTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Total:</span>
                <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#2563eb' }}>${total}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDemo;