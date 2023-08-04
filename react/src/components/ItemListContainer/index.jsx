import { useState } from "react";
import "./styles.css";

function ItemListContainer({ greetings }) {
  const [saludo, setSaludo] = useState(greetings);

  function cambio() {
    setSaludo("6");
  }

  return (
    <div className="item-list-container">
      <p>{saludo}</p>
      <button onClick={cambio}>calcular stock</button>
    </div>
  );
}

export default ItemListContainer;