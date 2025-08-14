import { useState } from 'react'
import './App.css'

export default function App() {
  const [text, setText] = useState('')
  const [isTextSelected, setIsTextSelected] = useState(false)
  const charCount = text.length


  const convertToBoldUnicode=(text)=>{
    let boldText = ""

    const boldMath = {
    // Uppercase A–Z
    A: "\u{1D400}", B: "\u{1D401}", C: "\u{1D402}", D: "\u{1D403}", E: "\u{1D404}",
    F: "\u{1D405}", G: "\u{1D406}", H: "\u{1D407}", I: "\u{1D408}", J: "\u{1D409}",
    K: "\u{1D40A}", L: "\u{1D40B}", M: "\u{1D40C}", N: "\u{1D40D}", O: "\u{1D40E}",
    P: "\u{1D40F}", Q: "\u{1D410}", R: "\u{1D411}", S: "\u{1D412}", T: "\u{1D413}",
    U: "\u{1D414}", V: "\u{1D415}", W: "\u{1D416}", X: "\u{1D417}", Y: "\u{1D418}",
    Z: "\u{1D419}",

    // Lowercase a–z
    a: "\u{1D41A}", b: "\u{1D41B}", c: "\u{1D41C}", d: "\u{1D41D}", e: "\u{1D41E}",
    f: "\u{1D41F}", g: "\u{1D420}", h: "\u{1D421}", i: "\u{1D422}", j: "\u{1D423}",
    k: "\u{1D424}", l: "\u{1D425}", m: "\u{1D426}", n: "\u{1D427}", o: "\u{1D428}",
    p: "\u{1D429}", q: "\u{1D42A}", r: "\u{1D42B}", s: "\u{1D42C}", t: "\u{1D42D}",
    u: "\u{1D42E}", v: "\u{1D42F}", w: "\u{1D430}", x: "\u{1D431}", y: "\u{1D432}",
    z: "\u{1D433}",

    // Digits 0–9
    0: "\u{1D7CE}", 1: "\u{1D7CF}", 2: "\u{1D7D0}", 3: "\u{1D7D1}", 4: "\u{1D7D2}",
    5: "\u{1D7D3}", 6: "\u{1D7D4}", 7: "\u{1D7D5}", 8: "\u{1D7D6}", 9: "\u{1D7D7}"," ": " ","'":"'",
  };
  text.split('').forEach(letter => {
      if(boldMath[letter]){
          boldText = boldText + boldMath[letter]
      }
  });
  return boldText
  }

  const convertToItalicUnicode=(text)=>{
    let italicText = ""
    const italicMath = {
    // Uppercase A–Z
    A: "\u{1D434}", B: "\u{1D435}", C: "\u{1D436}", D: "\u{1D437}", E: "\u{1D438}",
    F: "\u{1D439}", G: "\u{1D43A}", H: "\u{1D43B}", I: "\u{1D43C}", J: "\u{1D43D}",
    K: "\u{1D43E}", L: "\u{1D43F}", M: "\u{1D440}", N: "\u{1D441}", O: "\u{1D442}",
    P: "\u{1D443}", Q: "\u{1D444}", R: "\u{1D445}", S: "\u{1D446}", T: "\u{1D447}",
    U: "\u{1D448}", V: "\u{1D449}", W: "\u{1D44A}", X: "\u{1D44B}", Y: "\u{1D44C}",
    Z: "\u{1D44D}","'":"'",

    // Lowercase a–z
    a: "\u{1D44E}", b: "\u{1D44F}", c: "\u{1D450}", d: "\u{1D451}", e: "\u{1D452}",
    f: "\u{1D453}", g: "\u{1D454}", h: "\u{0210E}", i: "\u{1D456}", j: "\u{1D457}",
    k: "\u{1D458}", l: "\u{1D459}", m: "\u{1D45A}", n: "\u{1D45B}", o: "\u{1D45C}",
    p: "\u{1D45D}", q: "\u{1D45E}", r: "\u{1D45F}", s: "\u{1D460}", t: "\u{1D461}",
    u: "\u{1D462}", v: "\u{1D463}", w: "\u{1D464}", x: "\u{1D465}", y: "\u{1D466}",
    z: "\u{1D467}",

    // Numbers
    0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", " ":" "
  };

  text.split('').forEach(letter => {
      if(italicMath[letter]){
          italicText = italicText + italicMath[letter]
      }
  });

  return italicText.trim()

  }

  const splitIntoBoldAndItalic=(fullString)=>{
    return fullString.split(/(<\/?(?:b|i)>.*?<\/(?:b|i)>)/);
  }

  const getConvertedString=(string)=>{
    const parts = splitIntoBoldAndItalic(string)

    let finalTextArray = []

    parts.forEach((word) => {
      const wordWithoutSpaces = word.trim()
      if(wordWithoutSpaces.startsWith('<b>') && wordWithoutSpaces.endsWith('</b>')) {
        finalTextArray.push(convertToBoldUnicode(wordWithoutSpaces.slice(3, wordWithoutSpaces.length-4)))
      }
      else if(wordWithoutSpaces.startsWith('<i>') && wordWithoutSpaces.endsWith('</i>')) {
        finalTextArray.push(convertToItalicUnicode(wordWithoutSpaces.slice(3, wordWithoutSpaces.length-4)))
      }
      else{
        finalTextArray.push(wordWithoutSpaces)
      }
    })

    return finalTextArray.join(" ")
  }

  const handleMouseUp=()=>{
    const selectedText = window.getSelection().toString()
    if(selectedText){
      setIsTextSelected(true)
    }else{
      setIsTextSelected(false)
    }
  }

  const replaceWithBold=()=>{
    const selectedText = window.getSelection().toString()
    if(selectedText){
      setText(text.replace(selectedText, `<b>${selectedText}</b>`))
      setIsTextSelected(false)
    }
  }

  const replaceWithItalic=()=>{
    const selectedText = window.getSelection().toString()
    if(selectedText){
      setText(text.replace(selectedText, `<i>${selectedText}</i>`))
      setIsTextSelected(false)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="title">
          <h1>Unicode Converter</h1>
          <p className="subtitle">Type or paste text on the left — see a live preview on the right.</p>
        </div>
      </header>

      <main className="panel-grid">
        <div className="panel input-panel">
          <div className="panel-header">Input</div>
          <textarea
            onMouseUp={handleMouseUp}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text here..."
            aria-label="Input text"
          />

          <div className="panel-footer">
            <span className="meta">{charCount} characters</span>
            <div className="actions">
              <button
                className="ghost"
                onClick={() => setText('')}
                title="Clear text"
              >
                Clear
              </button>
              {

                isTextSelected?
                <>
                <button
                className="ghost"
                onClick={replaceWithBold}
                title="Clear text"
              >
                Bold
              </button>
              <button
                className="ghost"
                onClick={replaceWithItalic}
                title="Clear text"
              >
                Italic
              </button>
                </>:null
              }
            </div>
          </div>
        </div>

        <div className="panel preview-panel">
          <div className="panel-header">Preview</div>
          <div className="preview-content" aria-live="polite">
            {text ? (
              <pre className="preview-text">{getConvertedString(text)}</pre>
            ) : (
              <div className="muted">Live preview will appear here.</div>
            )}
          </div>
          <div className="panel-footer">
            <span className="meta">{charCount} characters</span>
            <div className="actions">
              {
                charCount!==0?<button
                className="primary"
                onClick={() => navigator.clipboard?.writeText(getConvertedString(text))}
                title="Copy text"
              >
                Copy
              </button>:null
              }
            </div>
          </div>
        </div>
      </main>

      <footer className="app-footer">Clean, modern and responsive — built with React + Vite.</footer>
    </div>
  )
}
