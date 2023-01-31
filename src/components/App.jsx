import React from "react";

import Header from "./Header";
import InputBox from "./InputBox";
import Input from "./Input";
import HeadText from "./HeadText";
import Grid from "./Grid";
import Calculate from "./Calculate";
import tipPercent from "../Percentage";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <section className="top">
        <InputBox
              src="/images/icon-dollar.svg"
              heading="Bill"
              name="bill"         
            />
          <div>
            <HeadText text="Select Tip %" />
            <div className="grid-container">
              {tipPercent.map((item) => (
                <Grid key={item.id} percent={item.percent} />
              ))}
              <Input
                placeholder="Custom"
                name="tip"
                class="custom"
              />
            </div>
          </div>
          <InputBox
              src="/images/icon-person.svg"
              heading="Number of People"
              name="people"
            />
        </section>
        <section className="bottom">
          <Calculate text="Tip Amount" calc="0.00" />
          <Calculate text="Total" calc="0.00" />
          <button
            type="reset"
          >
            RESET
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
