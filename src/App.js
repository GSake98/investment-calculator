import HeaderForm from "./components/HeaderForm";
import Header from "./components/Header";
import TableHeaders from "./components/TableHeaders";
import TableResults from "./components/TableResults";
import Icon from "./assets/investment-calculator-logo.png";
import { LABELS } from "./data";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: +value,
    }));
  }

  const allFieldsFilled = Object.values(values).every((val) => val !== "");

  const numericValues = {
    initialInvestment: +values.initialInvestment,
    annualInvestment: +values.annualInvestment,
    expectedReturn: +values.expectedReturn,
    duration: +values.duration,
  };

  const data = allFieldsFilled ? calculateInvestmentResults(numericValues) : [];

  return (
    <main>
      <Header title="Investment Calculator" icon={Icon} />
      <HeaderForm labels={LABELS} values={values} onChange={handleChange} />
      {data.length > 0 ? (
        <table id="result">
          <TableHeaders />
          <TableResults
            data={data}
            annualInvestment={values.annualInvestment}
            initialInvestment={values.initialInvestment}
          />
        </table>
      ) : (
        <p className="center">Please fill all the fields</p>
      )}
    </main>
  );
}

export default App;
