import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <Navbar />
      <div
        className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/154959649/photo/dollar-agains-euro.jpg?s=1024x1024&w=is&k=20&c=mXqPwiubX9yQVhNNUfiWYQUXHwtEi1C7Qpec8WYSJZo=)`,
        }}
      >
        <div className="w-full max-w-lg lg:max-w-2xl mx-4 sm:mx-auto border-8 border-yellow-400 rounded-lg p-5 backdrop-blur-sm bg-white/50">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-4"
          >
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 my-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full">
              <InputBox
                label="To"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
