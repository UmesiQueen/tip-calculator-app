import React,{useState} from "react";

import Header from "./Header";
import InputBox from "./InputBox";
import Input from "./Input";
import HeadText from "./HeadText";
import Grid from "./Grid";
import Calculate from "./Calculate";
import tipPercent from "../Percentage";

function App() {

  const [data, setData] = useState({});

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

  return (
    <div>
      <Header />
      <main className="container">
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
                <Grid key={item.id} percent={item.percent}  onClick={getData} />
              ))}
              <Input
                placeholder="Custom"
                name="tip"
                class="custom"
                onChange={getData}
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
