// import React, { useState, useEffect } from "react"
// import axios from "axios"

// // de-structure language and text props
// const Convert = ({ language, text }) => {
//   const [results, setResults] = useState("")

//   useEffect(() => {
//     const translate = async () => {
//       const translation = await axios.post(
//         "https://google-translate1.p.rapidapi.com/language/translate/v2",
//         {},
//         {
//           params: {
//             q: text,
//             target: language.value,
//             key: "ed43677c76msh78d9e1861978f2ap14e561jsn05c9e080cf5c",
//           },
//         }
//       )

//       setResults(translation.data.data.translations[0].translatedText)
//     }

//     translate()
//   }, [language, text])

//   return (
//     <div>
//       <p>{results}</p>
//     </div>
//   )
// }

// export default Convert

import React, { useState, useEffect } from "react"
import axios from "axios"

// de-structure language and text props
const Convert = ({ language, text }) => {
  const [results, setResults] = useState([])
  const [debouncedText, setDebouncedText] = useState(text)

  // de-bouncing the search term
  // runs every time the text changes
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)
    return () => {
      clearTimeout(timerId)
    }
  }, [text])

  // runs every time language or debouncedText updates
  useEffect(() => {
    const translate = async () => {
      const translation = await axios.post(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "ed43677c76msh78d9e1861978f2ap14e561jsn05c9e080cf5c",
          },
        }
      )

      setResults(translation.data.data.translations[0].translatedText)
    }

    translate()
  }, [language, debouncedText])

  return (
    <div>
      <p>{results}</p>
    </div>
  )
}

export default Convert