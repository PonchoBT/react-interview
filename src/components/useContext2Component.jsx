import React, { useContext, createContext, useState } from 'react';

// Creamos el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setItems(currentItems =>
      currentItems.filter(item => item.id !== productId)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      total 
    }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar el carrito
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

// Componente de producto
function Product({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div style={{ 
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '4px'
    }}>
      <h4>{product.name}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
}

// Componente del carrito
function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  
  return (
    <div>
      <h3>Carrito de Compras</h3>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '10px 0'
            }}>
              <span>{item.name}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                style={{ width: '60px' }}
              />
              <span>${(item.price * item.quantity).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </div>
          ))}
          <div style={{ marginTop: '20px' }}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}

// Componente principal que demuestra useContext
export function UseContext2Component() {
  const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
  ];

  return (
    <div>
      <h2>useContext Avanzado</h2>
      <CartProvider>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h3>Productos</h3>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
          <Cart />
        </div>
      </CartProvider>
      <div style={{ marginTop: '20px' }}>
        <small>
          Este ejemplo demuestra:
          <ul>
            <li>Context Provider personalizado</li>
            <li>Hook personalizado (useCart)</li>
            <li>Manejo de estado complejo</li>
            <li>Múltiples consumidores de contexto</li>
            <li>Manejo de errores de contexto</li>
          </ul>
        </small>
      </div>
    </div>
  );
} 