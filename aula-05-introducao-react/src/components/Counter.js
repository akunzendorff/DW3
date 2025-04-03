import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
        <button onClick={() => setCount(count == 0)}>Zerar</button>
      </div>
    </>
  );
};
export default Counter;
