import { useState } from "react";
import "./App.css";
import data from "./assets/emojiList.json";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");
  const [isHover, setIsHover] = useState(null);

  // {
  //   data.map((element, index) => {
  //     return (
  //       <div key={index}>
  //         <p>{element.symbol}</p>;
  //       </div>
  //     );
  //   });
  // }

  return (
    <>
      <header>
        <h1>😄 Emoji Search 😄</h1>
      </header>
      <main>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What emoji are you looking for ?"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

        {data
          .filter((element) => {
            return element.keywords.includes(search);
          })
          .map((element, index) => {
            // console.log(element);
            //{title: 'Regional Indicator c', symbol: '🇨', keywords: 'regional indicator symbol letter c'}

            return (
              <article
                key={index + element.title}
                onMouseEnter={() => {
                  setIsHover(element.title);
                }}
                onClick={() => {
                  navigator.clipboard.writeText(element.symbol);
                }}>
                <div>
                  <span>{element.symbol}</span>
                  <span>{element.title}</span>
                </div>

                {isHover === element.title && <span>Click to cpoy !</span>}
              </article>
            );
          })
          .slice(0, 20)}
      </main>
      <Footer />
    </>
  );
};
export default App;
