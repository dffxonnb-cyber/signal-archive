type Option = {
  label: string;
  value: string;
};

type FilterSelectProps = {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function FilterSelect({
  id,
  label,
  options,
  value,
  onChange,
}: FilterSelectProps) {
  return (
    <label className="filter-field" htmlFor={id}>
      <span className="filter-field__label">{label}</span>
      <select
        className="filter-select"
        id={id}
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

