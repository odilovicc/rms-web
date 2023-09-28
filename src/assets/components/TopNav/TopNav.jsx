import React, { useState, useMemo, useCallback } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import CustomInput from "../Input/CustomInput";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function TopNav(props) {
  const { addButton} = props;
  const [visible, setVisible] = useState(false);

  return (
    <div className="px-4 flex items-center bg-white ">
      <Link to="/" className="flex items-center text-[--primary] gap-2">
        <i className="pi pi-arrow-left text-sm"></i>
        <p>Back</p>
      </Link>
      <h1 className="mx-auto text-xl font-semibold text-[--primary]">
        {props.title}
      </h1>
      {addButton && (
        <div>
          <Button text icon="pi pi-plus" onClick={() => setVisible(true)}/>
        </div>
      )}
      <Dialog
        visible={visible}
        header={`Create ${props.titleDialog}`}
        onHide={() => setVisible(false)}
        pt={{
          headerTitle: {
            className: 'text-[--primary-color] text-sm'
          }
        }}
      >
        <div className="flex flex-col gap-1">
          <h1>{props.labelName}</h1>
          <CustomInput/>
          <div className="flex gap-2 mt-2 justify-between">
            <Button
              label={props.buttonSuccess}
              severity="success"
              text
              icon="pi pi-check"
            />
            <Button
              label={props.buttonDanger}
              severity="danger"
              text
              icon="pi pi-sign-out"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}