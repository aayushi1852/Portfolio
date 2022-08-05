import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer"
import { Switch, Route } from "react-router-dom";
import Skill from "./components/Skill";
import './App.css';

function App() {
    return (
        <>
            <Navbar />


            <Switch>
                {/* <Route exact path='/' component={Home} /> */}
                <Route exact path='/portfolio/'>
                    <Home />
                    <About />
                    <Skill />
                    <Projects />
                    <Contact />
                    <Footer />
                </Route>
                {/* <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
                <Route exact path='/project' component={Projects}></Route>
                <Route exact path='/skill' component={Skill}></Route> */}
            </Switch>
        </>
    );
}

export default App;