import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Ocean" />
        </main>
        <footer className="app-footer">
          <small>
            💙 Coded by{" "}
            <a
              href="https://alliesportfolio.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Alexandria Marszalek
            </a>{" "}
            & is{" "}
            <a
              href="https://github.com/AJeannae/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced
            </a>{" "}
            💙
          </small>
        </footer>
      </div>
    </div>
  );
}
