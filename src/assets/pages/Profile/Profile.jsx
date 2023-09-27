import React, { useRef } from 'react';
import TopNav from "../../components/TopNav/TopNav";
import ProfileLabel from "./Labels/ProfileLabel";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
export default function Profile() {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
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
      <TopNav title="Profile" />
      <div className="p-5">
        <ProfileLabel
          labelName="Firstname"
          inputValue="James"
          roundedBottom
          textTrue
        />
        <ProfileLabel labelName="Lastname" inputValue="Bond" rounded textTrue />
        <ProfileLabel
          labelName="Role"
          rounded
          dropdownTrue
          opts={roles}
          placeDropdown="Select..."
        />
        <ProfileLabel
          labelName="Branches"
          rounded
          dropdownTrue
          opts={branches}
          placeDropdown="Select..."
        />
        <ProfileLabel
          labelName="Username"
          rounded
          textTrue
          inputValue="b.james"
        />
        <ProfileLabel
          labelName="Password"
          rounded
          passTrue
          inputValue="b.james"
        />
        <ProfileLabel
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
