import { useState } from "react";
import axios from "axios";
import ExchangeRate from "../Components/ExchangeRate";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA "];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC");
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);
  const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState(0);
  const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] =
    useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://ec-crypto-dashboard.herokuapp.com/convert",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setExchangeRate(response.data);
        setResult(response.data * amount);
        setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
        setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {" "}
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="input-box">
          <table className="currency-table">
            <tbody>
              <tr>
                <td>Primary Currency:</td>
                <td>
                  <input
                    type="number"
                    name="currency-amount-1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                <td>
                  <select
                    value={chosenPrimaryCurrency}
                    name={"currency-option-1"}
                    className="currency-options"
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency) => {
                      return <option>{currency}</option>;
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Secondary Currency:</td>
                <td>
                  <input
                    type="number"
                    name="currency-amount-2"
                    value={result}
                    disabled={true}
                  />
                </td>
                <td>
                  <select
                    value={chosenSecondaryCurrency}
                    name={"currency-option-2"}
                    className="currency-options"
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency) => (
                      <option>{currency}</option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button id="convert-button" onClick={convert}>
            Convert
          </button>
        </div>

        <ExchangeRate
          exchangeRate={exchangeRate}
          chosenPrimaryCurrency={primaryCurrencyExchanged}
          chosenSecondaryCurrency={secondaryCurrencyExchanged}
        />
      </div>
    </>
  );
};

export default CurrencyConverter;
