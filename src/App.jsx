import { useEffect, useState } from 'react'
import './App.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)
  const [AddOff, setAddOff] = useState(false)
  const [AddMinus, setAddMinus] = useState(false)
  const [PopUp, setPopUp] = useState(false)
  const [bg, setBg] = useState(0)

  useEffect(() => {
    if (count >= 1000) {
      setAddOff(true);
    } else {
      setAddOff(false);
    }

    if (count >= 1000) {
      setAddMinus(true);
    } else if (count <= 0) {
      setAddMinus(false);
    }

    if (count == 0 || count == 10 || count == 100 || count == 1000) {
      setPopUp(true);
    } else {
      setPopUp(false)
    }

    if (count == 0) {
      setBg('bg0')
    } else if (count == 10) {
      setBg('bg10')
    } else if (count == 100) {
      setBg('bg100')
    } else if (count == 1000) {
      setBg('bg1000')
    }

  }, [count]);

  const plus = () => {
    if (count >= 1000) {
      setCount(count)
    }
    if (count >= 100) {
      setCount(count + 100);
    }
    else if (count >= 10) {
      setCount(count + 10);
    }
    else if (count >= 0) {
      setCount(count + 1);
    }
  };
  const minus = () => {
    if (count <= 0) {
      setCount(count);
    } else if (count <= 10) {
      setCount(count - 1);
    } else if (count <= 100) {
      setCount(count - 10);
    } else if (count <= 1000) {
      setCount(count - 100);
    }
  }

  return (
    <>
      <section className={`bg ${bg}`}>
        <div className='card'>
          <p> your count is {count}</p>
          <div>
            <button onClick={plus} disabled={AddOff} className="button"> <span>ADD</span> <FaPlus /></button>
            <button onClick={minus} className={!AddMinus ? "minus-button" : "button"}> <span>Minus</span>  <FaMinus /></button>
          </div>
        </div>

      </section>
      <div className={!PopUp ? "popup" : "popup active"} >
        <p> {` ${count == 0 ? "welcome" : "Wow, your count is " + count} `}</p>
      </div>
    </>
  )
}

export default App
