import { Dropdown } from "primereact/dropdown";
import './customDropdown.css'

export default function CustomInput(props) {
  return (
    <div>
      <Dropdown
        value={props.valueD}
        onChange={props.whenChange}
        options={props.optionsD}
        optionLabel={props.optionLabelD}
        placeholder="Select"
        pt={{
            root: { className: 'w-full md:w-14rem' },
            item: ({ context }) => ({
                className: context.selected ? 'bg-primary' : undefined
            })
        }}
        className="w-full hidden"
      />
    </div>
  );
}
