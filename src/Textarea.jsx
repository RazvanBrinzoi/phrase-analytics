import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [showWarning, setShowWarning] = useState(null);

  const validateTextArea = (newText) => {
    if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setShowWarning("No script tags allowed!");
    } else if (newText.includes("@")) {
      newText = newText.replace("@", "");
      setShowWarning("No email addresses allowed!");
    } else {
      setShowWarning(null);
    }

    return newText;
  };

  const handleChange = (event) => {
    let validatedText = validateTextArea(event.target.value);
    setText(validatedText);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your thoughts."
        spellCheck="false"
        className="textarea"
      />
      {showWarning && <Warning warningText={showWarning} />}
    </>
  );
}
