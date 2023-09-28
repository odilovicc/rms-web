import TopNav from "../../components/TopNav/TopNav";
import ProfileLabel from "./Labels/ProfileLabel";
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
            <i className="pi pi-camera" style={{color: '#779CFF', fontSize: '1.3rem'}}></i>
          </div>
        </div>
        {/* Profile Photo */}
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
          rounded
          dropdownTrue
          opts={language}
        />
        <div className="rounded-b-xl py-2 bg-white">
          <Button severity="success" icon="pi pi-check" label="Save" text />
        </div>
      </div>
    </div>
  );
}
