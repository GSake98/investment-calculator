import { formatter } from "../util/investment";

export default function TableResults({
  data,
  initialInvestment,
  annualInvestment,
}) {
  let cumulativeInterest = 0;

  return (
    <tbody>
      {data.map((yearData) => {
        cumulativeInterest += yearData.interest;

        let investedCapital =
          initialInvestment + annualInvestment * yearData.year;

        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(cumulativeInterest)}</td>
            <td>{formatter.format(investedCapital)}</td>
          </tr>
        );
      })}
    </tbody>
  );
}
