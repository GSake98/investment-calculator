export default function HeaderForm({ labels, values, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        {labels.slice(0, 2).map(({ key, label }) => (
          <div key={key} className="input-field">
            <label htmlFor={key}>{label}</label>
            <input
              id={key}
              name={key}
              type="number"
              value={values[key]}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
      <div className="input-group">
        {labels.slice(2, 4).map(({ key, label }) => (
          <div key={key} className="input-field">
            <label htmlFor={key}>{label}</label>
            <input
              id={key}
              name={key}
              type="number"
              value={values[key]}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
