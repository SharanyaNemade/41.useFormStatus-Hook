import { useFormStatus } from "react-dom";

function App() {
  const handlerSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
  };

  function Customerform() {

    const {pending} = useFormStatus();
    console.log(pending);

    return (
      <div>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="text" placeholder="Enter Password" />
        <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
      </div>
    );
  }




  return (
    <div>
      <h1>useFormStatus Hook in React JS 19</h1>
      <form action={handlerSubmit}>
        <Customerform />
      </form>
    </div>
  );
}

export default App;
