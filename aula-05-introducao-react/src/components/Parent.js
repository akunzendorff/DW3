import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div>
        <p><strong>Este é o componente pai</strong></p>
        {/* Chamando o componente filho */}
        <Child/>
      </div>
    </>
  );
};

export default Parent;
