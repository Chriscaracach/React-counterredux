import React from "react";
import { useSelector, useDispatch } from "react-redux";

//Actions, no me dejó ponerlos en otro archivo .js e importarlos, no se porque.
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

//Componente del contador
const Counter = () => {
  //El método useSelector sirve para consumir datos de la store de redux. En éste caso el contador
  const count = useSelector((state) => state.counter);
  //El método useDispatch sirve para aplicar las acciones(cambios) en la store.
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div className="container text-center">
      <h1 className="m-3">Un contador en Redux!</h1>
      <h3 className="m-3">{count}</h3> {/*Variable sacada de la store*/}
      <button
        className="btn btn-primary m-3"
        onClick={() => {
          dispatch(increment()); //Aquí se usan los dispatchs
        }}
      >
        +
      </button>
      <button
        className="btn btn-danger m-3"
        onClick={() => {
          dispatch(decrement()); //Dispatch
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
