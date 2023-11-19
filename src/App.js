import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer className="m-2">
          <p>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/eliška-nečasová-front-end-tester"
              target="_blank"
              rel="noreferrer"
              title="linkedIn profile"
            >
              {" "}
              Eliska Necas
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/EliTimeless/new-react-weather-app.git"
              target="_blank"
              rel="noreferrer"
              title="Github profile"
            >
              open-source
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
