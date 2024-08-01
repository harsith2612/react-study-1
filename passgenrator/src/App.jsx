import { useState, useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [useNumber, setuseNumber] = useState(false);
  const [useCharacter, setuseCharacter] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenrator = useCallback(() => {
    let pwd = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (useNumber) {
      str += '0123456789';
    }
    if (useCharacter) {
      str += "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
    }

    for (let i = 0; i < length; i++) {
      let tempInd = Math.floor(Math.random() * (str.length + 1));
      pwd += str.charAt(tempInd);
    }
    setPass(pwd);
  }, [setPass, length, useNumber, useCharacter]);

  const passRef=useRef(null);
  const copyToBoard=useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass)
  },[pass])
  useEffect(()=>{
    passwordGenrator()
  },[length,useCharacter,useNumber,setPass])
  return (
    <>
      {/* <h1 className="text-4xl text-center pt-10 text-white">PassWord Genrator</h1> */}

      <div className="w-full max-w-lg rounded-lg text-orange-500 bg-gray-600 text-center mx-auto mt-20">
        <h1 className="text-4xl text-center py-10 text-white mx-auto">PassWord Genrator</h1>
        <div className="p-5 flex">
          <input type="text" className='w-full outline-none p-3 rounded-s-xl  font-bold' value={pass} placeholder='password' readOnly ref={passRef}/>
          <button className='bg-blue-600 text-white rounded-e-xl p-3 outline-none font-semibold'
            onClick={copyToBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-4 mx-auto p-5">
          <div className="flex items-center gap-x-2">
            <input type="range" 
              min={8}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label> 
              Length:{length}
            </label>
          </div>
          <div className="flex items-center gap-x-2">
            <input type="checkbox" 
              defaultChecked={useNumber}
              onClick={()=>{
                setuseNumber((pre)=>!pre);
              }}
            />
            <label > Number</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input type="checkbox"
             defaultChecked={useCharacter}
             onChange={()=>{
              setuseCharacter((pre)=>!pre);
             }}
              />
              <label >Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
