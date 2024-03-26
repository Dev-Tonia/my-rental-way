import { RouterProvider } from "react-router-dom";
import { CartContext } from "./context/cartContext";
import { router } from "./route";
import { useState } from "react";

function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
}

export default App;
