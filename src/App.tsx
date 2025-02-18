import { Children, useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {    
 const [alertVisible, setAlertVisibility] = useState(false); 
  

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)} >Well Done</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>Click Me</Button>
    </div> 
  );
}

export default App;
