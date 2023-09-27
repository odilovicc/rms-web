import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Password } from "primereact/password";
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
          className={`px-6 py-4 flex justify-between items-center gap-5 bg-white ${
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
            <InputText value={props.inputValue} />
          </div>
          <div className={`${passTrue ? "block" : "hidden"}`}>
            <Password
              value={value}
              onChange={(e) => setValue(e.target.value)}
              feedback={false}
            />
          </div>
        </div>
    </div>
  );
}
