import logo from './logo.svg';
import './App.css';
import Logo from './navbar_components/Navbar';
import Links from './navbar_components/Links';
import Button  from './navbar_components/Button';

function App() {
  return (

    <div className="navbar">
      <navbar className="nav">
      <Logo></Logo>
        <Links></Links>
        <Button></Button>
      </navbar>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Logo></Logo>
    //     <Links></Links>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
