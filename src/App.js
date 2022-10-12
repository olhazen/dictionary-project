import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      <h1 style={{fontWeight: 'bold'}}> 📚 Your Favourite Dictionary App 📚 </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="candy" />
      </main>
      <footer className="App-footer">
      This project was coded by{" "}
      <a href="https://olhasi.wixsite.com/my-site" 
      target="_blank" rel="noopener noreferrer">
       Olha Zen  
       </a> {" "} 
       and is{" "}
  <a href="https://github.com/olhazen/dictionary-project" target="_blank" rel="noopener noreferrer">open-sourced on GitHub </a> and is{" "}
  <a href="https://glistening-baklava-396b03.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify 
  </a>
        </footer>
    </div>
    </div>
  );
}