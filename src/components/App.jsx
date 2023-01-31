import React, { useEffect, useState } from "react";

import Header from "./Header";
import InputBox from "./InputBox";
import Input from "./Input";
import HeadText from "./HeadText";
import Grid from "./Grid";
import Calculate from "./Calculate";
import tipPercent from "../Percentage";

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

  // add class on active state
  function addClass(e) {
    e.target.parentElement.classList.add("active");
  }

  return (
    <div>
      <Header />
      <form className="container">
        <section className="top">
          <InputBox
            src="/images/icon-dollar.svg"
            heading="Bill"
            name="bill"
            onChange={getData}
          />
          <div>
            <HeadText text="Select Tip %" />
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
          <InputBox
            src="/images/icon-person.svg"
            heading="Number of People"
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
