

import "./App.css";
function About() {

  const aboutParagraphs:object = [
    {id: 0,
    engText: "Hi! I live and work in Berlin and use React to create user-friendly products.",
    deuText: "Hallo! Ich arbeite in Berlin und nutze React zur Entwicklung von Softwareprodukten.",
  },
  {id: 1,
    engText: "I worked as a lawyer in Vancouver before moving to Germany and learning how to code. I still do legal work and help create software for lawyers and their clients.",
    deuText: "In Vancouver arbeitete ich als Rechtsanwalt bevor ich nach Deutschland umgezogen bin um Coding zu lernen. Ich arbeite immer noch mit Anwälten und ihren Kunden.",
  },
  {id: 2,
    engText: "I've also taught English and German as foreign languages and worked in research roles at a think tank and university. I've done work in market research, too.",
    deuText: "Ich habe auch als Englisch- und Deutschlehrer gearbeitet und als Forscher in ... Ich habe auch als Marktforscher gearbeitet.",
  },
  {id: 3,
    engText: "Programming is a lot of fun for me, but I also enjoy writing, reading, traveling, playing squash and chess, running, cycling, and swimming. I (try to) meditate often.",
    deuText: "",
  },
  {id: 4,
    engText: "I speak some French and Mandarin, but—不好意思—my attempts to communicate in those languages put the *dur* in *traduire.*",
    deuText: "",
  },
  ]
  
  //line breaks for JSX?!?!? Use json or use .map()   
  //...but when switching between translations - use a file w/ English data structure & German data structure
  //i18n as a package; internet internationalization package. All of text in application is dynamic, keyed by variable names
  //

  //Who do you want to give you 
  return (

<div>

  <p>{aboutParagraphs.map()}</p>

  <p></p>
  
</div>
  )
}

export default function About();
