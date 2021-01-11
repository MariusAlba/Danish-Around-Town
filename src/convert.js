import React, { useState, useEffect } from "react"
import axios from "axios"
import qs from "qs"

// de-structure language and text props
const Convert = ({ language, text }) => {
  const [results, setResults] = useState("")

  useEffect(() => {
    const translate = async () => {
      const translation = await axios.post(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        qs.stringify({
          q: text,
          target: language.value
        }),
        {
          headers: {
            'x-rapidapi-key': 'ed43677c76msh78d9e1861978f2ap14e561jsn05c9e080cf5c',
            'x-rapidapi-host': 'google-translate1.p.rapidapi.com'
          }
        }
      )

      setResults(translation.data.data.translations[0].translatedText)
    }

    translate()
  }, [])
  console.log(results);
  return (
    <div>
      <p>{results}</p>
    </div>
  )
}

export default Convert