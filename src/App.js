import React, { useEffect, useState } from "react";

import Logo from "./components/Logo";
import Input from "./components/Input";
import Header from "./components/Header";
import Grid from "./components/Grid";
import Calculate from "./components/Calculate";
import tipPercent from "./Percentage";
import "./App.css";

function App() {
  const [data, setData] = useState({ tip: 0, bill: 0, people: 0 });
  const [bill, setBill] = useState({});

  //get user data
  function getData(e) {
    const { name, value } = e.target;
    const num = value.includes("%") ? value.slice(0, -1) : value;

    setData((prev) => {
      return {
        ...prev,
        [name]: Number(num),
      };
    });
  }

  //calculate tip
  useEffect(() => {
    const tip = (data.bill * data.tip) / 100;
    const tipPerPerson = tip / data.people;
    const billPerPerson = (data.bill + tip) / data.people;

    setBill({
      tip: tipPerPerson,
      total: billPerPerson,
    });
  }, [data]);

  //uncheck radio button on custom input change
  function unCheck() {
    var nodeList = document.querySelectorAll("input[type='radio']");
    for (const radio of nodeList) {
      if (radio.checked) radio.checked = false;
    }
  }

  return (
    <div>
      <Logo />
      <form className="container">
        <section className="top">
          <Input
            heading={<Header text="Bill" />}
            img={<img src="/images/icon-dollar.svg" alt="logo" />}
            placeholder="0"
            name="bill"
            onChange={getData}
          />
          <div>
            <Header text="Select Tip %" />
            <div className="grid-container">
              {tipPercent.map((item) => (
                <Grid
                  key={item.id}
                  name="tip"
                  percent={item.percent}
                  onClick={(e) => {
                    getData(e);
                    document.getElementById("custom").value = null;
                  }}
                />
              ))}
              <Input
                style={{ borderRadius: "5px" }}
                placeholder="Custom"
                name="tip"
                id="custom"
                onChange={(e) => {
                  getData(e);
                  unCheck();
                }}
    
              />
            </div>
          </div>
          <Input
            heading={<Header text="Number of People" />}
            img={<img src="/images/icon-person.svg" alt="logo" />}
            placeholder="0"
            name="people"
            onChange={getData}
           
          />
        </section>
        <section className="bottom">
          <Calculate text="Tip Amount" calc={bill.tip} />
          <Calculate text="Total" calc={bill.total} />
          <button
            type="reset"
            onClick={() => {
              setData({});
              setBill({});
            }}
          >
            RESET
          </button>
        </section>
      </form>
    </div>
  );
}

export default App;
