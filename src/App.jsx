
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [savings, setSaving] = useState(0);

  console.log(amount);
  console.log(discount);
  const reset = (e) => {
    setAmount(0);
    setDiscount(0);
    setTotal(0);
    setSaving(0);
  }
  const calculate = (e) => {
    const dis = (amount * discount / 100);
    const output = amount - dis;
    console.log(output);
    setTotal(output)
    setSaving(dis)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2b2493b-0e6c-4a7a-a12f-f0f568e1ccb5/dbyse4v-e667196e-5bc0-47ad-ba0d-cc0acb9eab7d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyYjI0OTNiLTBlNmMtNGE3YS1hMTJmLWYwZjU2OGUxY2NiNVwvZGJ5c2U0di1lNjY3MTk2ZS01YmMwLTQ3YWQtYmEwZC1jYzBhY2I5ZWFiN2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vDWvOlbupgWtpDRPUSDWkHyPgnltp1tLXjNmlJmEvgc" alt="" />
        </div>
          <div className="col-6">
            <div className="container">
            <form action>

              <div className="input">
                <h1>Discount Calculator</h1>
                <TextField id="standard-basic" value={amount || ""} onChange={(e) => setAmount(e.target.value)} label="Amount" variant="standard" />
                <TextField id="standard-basic" value={discount || ""} onChange={(e) => setDiscount(e.target.value)} label="Discount %" variant="standard" />
              </div>
              <div className="button">
                <Button variant="outlined" onClick={(e) => calculate(e)}>Discount</Button>
                <Button variant="outlined" onClick={(e) => reset(e)}>Reset</Button>
              </div>
              <h3>Total amount : {total} &#8377;</h3>
              <h4>You're Saving: {savings} &#8377;</h4>

            </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
