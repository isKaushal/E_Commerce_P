type inputprops = {
  plc: string;
  name: string;
  type: string;
  value?: string;
  className: string;
  onChange?: any;
};

export default function Input({
  plc,
  name,
  type,
  value,
  onChange,
  className,
}: inputprops): React.JSX.Element {
  return (
    <input
      // required
      value={value}
      name={name}
      type={type}
      className={`my-[0.5rem] h-[3rem] w-full rounded-md outline-none p-4 bg-gray-100 ${className}`}
      placeholder={plc}
      onChange={onChange}
    />
  );
}
