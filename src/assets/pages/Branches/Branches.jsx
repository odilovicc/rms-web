import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import { createAndAppendDiv } from "./createBranch";

export default function Branches() {
  const handleInputSubmit = (inputValue) => {
    const newDiv = createAndAppendDiv(inputValue);
    const containerDiv = document.getElementById("appearDiv");
    if (containerDiv) {
      containerDiv.appendChild(newDiv);
    }
  };

  return (
    <div>
      <TopNav
        title="Branches"
        handleInputSubmit={handleInputSubmit}
        addButton
        titleDialog="Branch"
        labelName="Name"
        buttonSuccess="Save"
        buttonDanger="Cancel"
      />
      <div id="appearDiv" className="px-5 flex flex-col gap-2"></div>
    </div>
  );
}