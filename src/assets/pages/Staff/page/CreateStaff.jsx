import TopNav from "../../../components/TopNav/TopNav";
import StaffLabel from "./StaffLabel";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
export default function Profile() {
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
        {/* Profile Photo */}
        <div className="p-10 flex items-center justify-center">
          <div className="relative">
            <Avatar
              image="https://source.unsplash.com/random"
              size="xlarge"
              shape="circle"
            />
            <i
              className="pi pi-camera"
              style={{ color: "#779CFF", fontSize: "1.3rem" }}
            ></i>
          </div>
        </div>
        {/* Profile Photo */}
        <StaffLabel
          labelName="Firstname"
          inputValue="James"
          roundedBottom
          textTrue
        />
        <StaffLabel labelName="Lastname" inputValue="Bond" rounded textTrue />
        <StaffLabel
          labelName="Role"
          rounded
          dropdownTrue
          opts={roles}
          placeDropdown="Select..."
        />
        <StaffLabel
          labelName="Branches"
          rounded
          dropdownTrue
          opts={branches}
          placeDropdown="Select..."
        />
        <StaffLabel
          labelName="Username"
          rounded
          textTrue
          inputValue="b.james"
        />
        <StaffLabel
          labelName="Password"
          rounded
          passTrue
          inputValue="b.james"
        />
        <StaffLabel labelName="Language" rounded dropdownTrue opts={language} />
        <div className="rounded-b-xl py-2 bg-white">
          <Button severity="success" icon="pi pi-check" label="Save" text />
        </div>
      </div>
    </div>
  );
}
