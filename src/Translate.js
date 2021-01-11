import React, { useState } from "react"

import Dropdown from "./Dropdown"
import Convert from "./Convert"

const languages = [
  {
<<<<<<< Updated upstream
    label: "Afrikaans",
    value: "af",
  },
  {
=======
>>>>>>> Stashed changes
    label: "Arabic",
    value: "ar",
  },
  {
<<<<<<< Updated upstream
=======
    label: "Afrikaans",
    value: "af",
  },
  {
>>>>>>> Stashed changes
    label: "Hindi",
    value: "hi",
  },
  {
    label: "spanish",
    value: "es",
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(languages[0])
  const [text, setText] = useState("")
console.log(text)
console.log(language)
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={languages}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert text={text} language={language} />
    </div>
  )
}

export default Translate