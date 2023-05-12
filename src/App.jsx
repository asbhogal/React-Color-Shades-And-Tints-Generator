// take in hex code
// check validity of input (ie. valid hex code)
// convert hex to rgb value
// create two arrays of 10 values, each with 10% increments, for lightness and darkness
// map through and return these front-end by appending to the background-color of the elements
// display original hex code (no logic required)

import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="app">
        <section className="app__header">
          <h1 className="app__header__title">Color Shades Generator</h1>
          <h2 className="app__header__subheading">
            Generate a series of shades and tints from any hex value
          </h2>
          <input
            type="text"
            className="app__header__input"
            placeholder="Enter a hex value"
          ></input>
        </section>
        <section className="app__shades-container">
          <span className="app__shades-container__title">Tints</span>
          <span className="app__shades-container__subheading">
            Mixes the color selected with white to make it brighter
          </span>
          <div className="app__shades-container__palette">
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
          </div>
        </section>
        <section className="app__shades-container">
          <span className="app__shades-container__title">Shades</span>
          <span className="app__shades-container__subheading">
            Mixes the color selected with black to make it darker
          </span>
          <div className="app__shades-container__palette">
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
            <div className="app__shades-container__palette__item">
              <span className="app__shades-container__palette__item__hex-value">
                #000000
              </span>
              <span className="app__shades-container__palette__item__percentage">
                100%
              </span>
            </div>
          </div>
        </section>

        <section className="app_tints-container"></section>
      </main>
    </>
  );
};

export default App;
