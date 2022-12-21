/* This component is part of my translation app */

// This imports the styling so we don't need to write the css code ourselves since this is React not css course.
import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  // jsx code. inside each compoent is an option.
  // React components are: Field, Languages, Translate.
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
