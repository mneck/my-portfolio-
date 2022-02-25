import "./App.css";

function App() {
  return (
    <div className="App layout">
      <div className="sidebar">
        <h2>🏡 Home</h2>
        <h2>👋 About</h2>
        <h2>🛠️ Projects</h2>
        <h2>📩 Contact</h2>
        <h2>🏔️ Now</h2>
      </div>

      <div className="main">
        <h1>Matthew Neckelmann</h1>
        <p>Hey there! I'm a freelance software developer based in Berlin. </p>
        <p>My working languages are English and German.</p>
        <p>Need help with a project? Feel free to contact me.</p>
        {/* <p>
          Hi! I'm a freelance software developer in Berlin focusing on building
          accessible and interactive web applications. As a former lawyer, I
          continue to do legal work and build applications to help lawyers work
          faster and smarter.
         </p> 

        <p>Need help with a project?</p>
        <p>Contact me at mneckelmann [at] gmail [dot] com.</p>
        <p>
          You can find me on GitHub <a href="https://github.com/mneck">here</a>.
        </p>
        */}
      </div>
      <div className="corner">
        <h2>🐓/🦉</h2>
      </div>
    </div>
  );
}

export default App;
