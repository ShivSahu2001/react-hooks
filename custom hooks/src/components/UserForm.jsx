import useInput from "../hooks/useInput";

const UserForm = () => {
// note : always destructure the array in sequence wise only eitherwise you will get errors take the reference from where you return the array and accordingly you can destructure it.
    const [firstName,  resetFirstName, bindFirstName] = useInput('')
    const [lastName,  resetLastName, bindLastName] = useInput('')

    // const [firstName,   bindFirstName, resetFirstName] = useInput('')
    // const [lastName,   bindLastName, resetLastName] = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Firstname:</label>
          <input
           {...bindFirstName}
            type="text"
          />
          
        </div>
        <div>
          <label>Lastname:</label>
          <input
            {...bindLastName}
            type="text"
          />

        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
