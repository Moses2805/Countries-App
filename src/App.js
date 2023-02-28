import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(10)
  const [temp, setTemp] = useState("cold")

  const increment = () => {
    setCount(c => c + 1)
  }

  const decrement = () => {
    setCount(c => c - 1)
  }

  // checking for temperature with changing count

  useEffect(() => {
    if (count >= 15) {
      setTemp("hot")
    } else {
      setTemp("cold")
    }

  // 

  }, [count])
  return (
    <div className="container mt-5">
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-4 col-xl-3 col-md-5 col-8'>
          <div className='tempBox'>
            <div className='row d-flex justify-content-center pt-4'>
              <div className='col-8'>
                <div className={`showingTemp ${temp}`}>
                  <p>{count}°C</p>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-evenly pt-3'>
              <div className='col-4'>
                <div className='incrTemp' onClick={() => increment()}>
                  <p>+</p>
                </div>
              </div>
              <div className='col-4'>
                <div className='decrTemp' onClick={() => decrement()}>
                  <p>-</p>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
