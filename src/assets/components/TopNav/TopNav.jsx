import React, { useState, useMemo, useCallback } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function TopNav(props) {
  const { addButton, handleInputSubmit } = props;
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showDialog = useCallback(() => {
    setVisible(true);
  }, []);

  const hideDialog = useCallback(() => {
    setVisible(false);
  }, []);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (inputValue) {
      handleInputSubmit(inputValue);
      hideDialog();
    }
  }, [inputValue, handleInputSubmit, hideDialog]);

  const memoizedTitle = useMemo(() => props.title, [props.title]);

  return (
    <div className="px-8 py-2 flex items-center bg-white ">
      <Link to="/" className="flex items-center text-[--primary] gap-2">
        <i className="pi pi-arrow-left text-sm"></i>
        <p>Back</p>
      </Link>
      <h1 className="mx-auto text-2xl font-semibold text-[--primary]">
        {memoizedTitle}
      </h1>
      {addButton && (
        <div>
          <Button text icon="pi pi-plus" onClick={showDialog} />
        </div>
      )}
      <Dialog
        visible={visible}
        header={`Create ${props.titleDialog}`}
        onHide={hideDialog}
      >
        <div className="flex flex-col gap-3">
          <h1>{props.labelName}</h1>
          <InputText value={inputValue} onChange={handleInputChange} />
          <div className="flex gap-2 justify-center">
            <Button
              label={props.buttonSuccess}
              severity="success"
              onClick={handleSubmit}
            />
            <Button
              label={props.buttonDanger}
              severity="danger"
              onClick={hideDialog}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}