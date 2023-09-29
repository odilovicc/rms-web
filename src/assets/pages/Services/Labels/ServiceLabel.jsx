import React, { useState } from "react";
import CustomInput from "../../../components/Input/CustomInput";
import { Dropdown } from "primereact/dropdown";
import CustomPassword from "../../../components/Password/CustomPassword";
export default function ServiceLabel(props) {
  const {
    rounded,
    roundedBottom,
    roundedTop,
    dropdownTrue,
    textTrue,
    passTrue,
  } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState("");
  return (
    <div>
        <div
          className={`px-4 py-2 flex justify-between items-center gap-5 bg-white ${
            rounded ? "rounded-none" : "rounded-2xl"
          } ${roundedBottom ? "rounded-b-none" : "rounded-2xl"} ${
            roundedTop ? "rounded-t-none" : "rounded-2xl"
          }`}
        >
          <h1 className="text-[--primary] font-semibold">{props.labelName}</h1>

          <div className={`${dropdownTrue ? "block" : "hidden"}`}>
            <Dropdown
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.value)}
              options={props.opts}
              optionLabel="name"
              placeholder={props.placeDropdown}
              className="w-full"
            />
          </div>    
          <div className={`${textTrue ? "block" : "hidden"}`}>
            <CustomInput value={props.inputValue} />
          </div>
          <div className={`${passTrue ? "block" : "hidden"}`}>
            <CustomPassword
              value={value}
              onChange={(e) => setValue(e.target.value)}
              feedback={false}
            />
          </div>
        </div>
    </div>
  );
}
