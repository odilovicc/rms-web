import React, { useState } from "react";
import CustomInput from "../../../components/Input/CustomInput";
import CustomDropdown from "../../../components/Dropdown/CustomDropdown";
import { Password } from "primereact/password";
export default function ProfileLabel(props) {
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
        className={`px-5 py-2 border-b flex justify-between items-center gap-8 bg-white ${
          rounded ? "rounded-none" : "rounded-2xl"
        } ${roundedBottom ? "rounded-b-none" : "rounded-2xl"} ${
          roundedTop ? "rounded-t-none" : "rounded-2xl"
        }`}
      >
        <h1 className="text-sm text-[--primary] font-semibold">
          {props.labelName}
        </h1>

        <div className={`${dropdownTrue ? "block w-full" : "hidden"}`}>
          <CustomDropdown
            valueD={selectedOption}
            whenChange={(e) => setSelectedOption(e.value)}
            optionsD={props.opts}
            optionLabelD="name"
            placeholder={props.placeDropdown}
          />
        </div>
        <div className={`${textTrue ? "block w-full" : "hidden"}`}>
          <CustomInput value={props.inputValue} />
        </div>
        <div className={`${passTrue ? "block w-full" : "hidden"}`}>
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
