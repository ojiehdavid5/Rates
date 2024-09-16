import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter'


function App() {
  const [form, setForm] = useState({
    from: '',
    to: '',
    amount: '',
  });
  const [result,setResult] =useState()
  const [error,setError]=useState('');

  console.log(form.from);
const getRates=async()=>{
    // e.preventDefault();


    const options = {
      method: 'GET',
      url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
      params: {
        from: `${form.from}`,
        to: `${form.to}`,
        amount: `${form.amount}`
      },
      headers: {
        'x-rapidapi-key': 'bb3a1fc2e5mshfa6f258aff35648p14a114jsna7be21ff7af1',
        'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data.result);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
      setError(error);
    }

  }

  useEffect(() => {
    getRates();
  
    
  }, [form.amount])
  


  

  return (
    <>
      <div className="flex flex-col wrapper items-center">
        <div className="text">
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#123962] to-[#b1d4e5]'>Rates</h1>
         
        </div>

        <div className='w-[428px] h-[534px] bg-[#123962] mt-8 flex flex-col items-center  form-container'>
          <h2 className='font-semibold text-xl p-2 font-myfont text-[#799eb2]'>Welcome to rates 👋🏽</h2>
          <form>
            <span className='flex flex-col mb-[2rem]'>
              <label className='text-[#799eb2] text-xl ml-4'>From:</label>
              <input 
                type='text'
                className='h-[3rem] mx-5 text-[#fff] rounded-[0.5rem] border-0 px-5 mt-[1rem] text-xl bg-[#799eb2] p-[1rem]'
                value={form.from}
                placeholder='e.g USD'
                onChange={(e) => setForm({ ...form, from: e.target.value.toUpperCase() })} // Use e.target.value
              />
            </span>

            <span className='flex flex-col mb-[2rem]'>
              <label className='text-[#799eb2] text-xl ml-4'>To:</label>
              <input 
                type='text'
                className='h-[3rem] text-white mx-5 rounded-[0.5rem] border-0  px-5 mt-[1rem] text-xl bg-[#799eb2]'
                value={form.to}
                placeholder='  e.g NGN'
                onChange={(e) => setForm({ ...form, to: e.target.value.toUpperCase() })} // Use e.target.value
              />
            </span>

            <span className='flex flex-col mb-[2rem]'>
              <label className='text-white text-xl ml-4'>Amount:</label>
              <input 
                type='text'
                className='h-[3rem] mx-5  text-white rounded-[0.5rem] border-0 px-5 mt-[1rem] text-xl bg-[#799eb2]'
                value={form.amount}
                placeholder='e.g 100'
                onChange={(e) => setForm({ ...form, amount: e.target.value.toUpperCase() })} // Use e.target.value
              />
            </span>
            {/* <button  onClick={getRates()}  className='w-[18rem] h-[3rem] bg-[#00aee6] rounded-[1rem]'>Get Rates</button> */}
            <h2 className='text-3xl font-myfont ml-[3rem] text-[#fff] result'>{result}</h2>
          </form>

        </div>
        
           <span className='text-2xl mt-7' style={{ color: 'black', fontWeight: 'bold'  }}>
           <Typewriter
            words={['<Hello there my name is chuks', '<i am a  frontend engineer ', 'feel free to contact', 'click the link below> ']}
            loop={100}
            cursor
            cursorStyle='/'
            typeSpeed={10}
            deleteSpeed={10}
            delaySpeed={1000}
          />
        </span>

          <h2 className='  text-2xl mt-3 text-blue-800'><a href='https://x.com/chuks_SOL'>Contact me </a></h2>


      </div>
    </>
  );
}

export default App;