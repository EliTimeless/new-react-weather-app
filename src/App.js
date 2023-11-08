import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />

        <footer className="m-2">
          <p>
            This project was coded by Eliska Necas and is
            <a
              href="https://github.com/EliTimeless/new-react-weather-app.git"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-source
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
