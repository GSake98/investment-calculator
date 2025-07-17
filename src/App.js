import LabelForm from "./components/LabelForm";
import Header from "./components/Header";
import Icon from "./assets/investment-calculator-logo.png";
import { LABELS } from "./data";

function App() {
  return (
    <div>
      <Header title="Investment Calculator" icon={Icon} />
      <LabelForm labels={LABELS} />
    </div>
  );
}

export default App;
