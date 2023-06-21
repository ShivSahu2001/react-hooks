import { useEffect, useState } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect rund after every render
//   In order to conditionally render the effects we use array dependency that will watch the state, props if it is changed then only rerender [state, props] as second parameter in useEffect Hook
  useEffect(() => {
    console.log("useEffect - Updating document title")
    document.title = `You Clicked ${count} time`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count: {count} times</button>
    </div>
  );
};

export default HookCounterOne;
