interface IProps {
  label: string;
  name: string;
  onChange: (name: string, checked: boolean) => void;
  checked?: boolean;
}

function Checkbox(props: IProps) {
  const { label, name, onChange, checked = false } = props;

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked: value } = event.target;
    onChange(name, value);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChangeHandler}
        className="form-checkbox h-5 w-5 border-gray-300 rounded"
      />
      <span className="ml-3">{label}</span>
    </label>
  );
}

export default Checkbox;
