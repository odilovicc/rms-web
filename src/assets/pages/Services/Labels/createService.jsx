import React, { useRef } from 'react';
import ServiceLabel from "./ServiceLabel";
import TopNav from '../../../components/TopNav/TopNav';
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
export default function createService() {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Successfull",
      detail: "Added successfully",
    });
  };
  const roles = [{ name: "Supervisor" }];
  const branches = [{ name: "Lisunova Korzinka" }];
  const language = [
    { name: "🇺🇿 Uzbek", code: "uz" },
    { name: "🇷🇺 Russian", code: "rus" },
  ];
  return (
    <div className="">
      <TopNav title="Services"/>
      <div className="p-5">
        <ServiceLabel
          labelName="Firstname"
          inputValue="James"
          roundedBottom
          textTrue
        />
        <ServiceLabel labelName="Lastname" inputValue="Bond" rounded textTrue />
        <ServiceLabel
          labelName="Role"
          rounded
          dropdownTrue
          opts={roles}
          placeDropdown="Select..."
        />
        <ServiceLabel
          labelName="Branches"
          rounded
          dropdownTrue
          opts={branches}
          placeDropdown="Select..."
        />
        <ServiceLabel
          labelName="Username"
          rounded
          textTrue
          inputValue="b.james"
        />
        <ServiceLabel
          labelName="Password"
          rounded
          passTrue
          inputValue="b.james"
        />
        <ServiceLabel
          labelName="Language"
          roundedTop
          dropdownTrue
          opts={language}
        />
        <div className="mx-auto my-5">
          <Toast ref={toast} />
          <Button
            severity="success"
            icon="pi pi-check"
            onClick={show}
            label="Save"
          />
        </div>
      </div>
    </div>
  );
}
