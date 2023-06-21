import { useState } from "react";

const HookCounterThree = () => {
    // setter function provided by useState does not automatically merge and update the object 
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({...name, lastName: e.target.value })}
      />
      <h2>FirstName: {name.firstName}</h2>
      <h2>LastName: {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default HookCounterThree;
