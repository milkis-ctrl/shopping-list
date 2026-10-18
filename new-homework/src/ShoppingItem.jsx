function ShoppingItem({ item, onDelete }) {
  return (
    <li className="shopping-item">
      <span>
        <strong>{item.name}</strong> — {item.price} сом
      </span>
      <button 
        type="button" 
        onClick={() => onDelete(item.id)}
        className="delete-btn"
      >
        Удалить
      </button>
    </li>
  );
}

export default ShoppingItem;