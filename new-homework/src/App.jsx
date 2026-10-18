import { useState } from 'react';
import ShoppingItem from './ShoppingItem';
import './App.css';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Молоко', price: 75 },
    { id: 2, name: 'Хлеб', price: 35 },
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  
  const handleAddItem = (e) => {
    e.preventDefault();

    const numericPrice = parseFloat(price);

    
    if (!name.trim() || isNaN(numericPrice) || numericPrice <= 0) {
      alert('Пожалуйста, введите корректное название и цену больше нуля');
      return;
    }

    const newItem = {
      id: Date.now(), 
      name: name.trim(),
      price: numericPrice,
    };

    setItems([...items, newItem]);
    setName('');
    setPrice('');
  };


  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Список покупок</h1>

      {/* Форма добавления нового товара */}
      <form onSubmit={handleAddItem} className="add-form">
        <input
          type="text"
          placeholder="Название товара"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Цена"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min="0"
          step="any"
        />
        <button type="submit">Добавить</button>
      </form>

      {/* Список покупок */}
      <ul className="items-list">
        {items.length === 0 ? (
          <p className="empty-message">Список покупок пуст</p>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
            />
          ))
        )}
      </ul>

      {/* Итоговая сумма */}
      <div className="total-block">
        <h3>Итого: {totalPrice.toFixed(2)} сом</h3>
      </div>
    </div>
  );
}

export default App;