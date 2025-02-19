import React, { useState, ReactElement } from "react";
import { createRoot } from "react-dom/client";
import IntlTelInput from "../src/IntlTelInput";

const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number",
];

const App = (): ReactElement => {
  const [isValid, setIsValid] = useState<string | null>(null);
   const [number, setNumber] = useState<string | null>(null);
   const [errorCode, setErrorCode] = useState<number | null>(null);
   const [notice, setNotice] = useState<string | null>(null);
  
  const handleSubmit = (): void => {
    if (isValid) {
      setNotice(`Valid number: ${number}`);
    } else {
      const errorMessage = errorMap[errorCode || 0] || "Invalid number";
      setNotice(`Error: ${errorMessage}`);
    }
  };
  
  return (
    <form>
      <IntlTelInput
        onChangeNumber={setNumber}
        onChangeValidity={setIsValid}
        onChangeErrorCode={setErrorCode}
        initOptions={{
          initialCountry: "us",
          utilsScript: "../../build/js/utils.js",
        }}
      />
      <button type="button" onClick={handleSubmit}>Validate</button>
      {notice && <div className="notice">{notice}</div>}
    </form>
  );
};

const container = document.getElementById("app");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}