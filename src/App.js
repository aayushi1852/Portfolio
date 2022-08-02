import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/projects' component={Projects}></Route>
            </Switch>
        </>
    );
}

export default App;