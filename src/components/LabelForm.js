export default function LabelForm({ labels }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {labels.slice(0, 2).map((label) => (
          <div key={label} className="input-field">
            <label htmlFor={label}>{label}</label>
            <input id={label} name={label} type="number" defaultValue="" />
          </div>
        ))}
      </div>
      <div className="input-group">
        {labels.slice(2, 4).map((label) => (
          <div key={label} className="input-field">
            <label htmlFor={label}>{label}</label>
            <input id={label} name={label} type="number" defaultValue="" />
          </div>
        ))}
      </div>
    </div>
  );
}
