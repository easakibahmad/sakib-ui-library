import { Checkbox } from "./components/Checkbox";
import RadioButton from "./components/RadioButton";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Checkbox label="Yes" />
      <RadioButton label="No" />
    </div>
  );
}

export default App;
