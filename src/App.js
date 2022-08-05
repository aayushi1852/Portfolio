import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Switch, Route } from "react-router-dom";
import Skill from "./components/Skill";
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' >
                    <Home bg={'white'} />

                    <About bg={'grey'} />
                    
                    <Skill bg={'white'} />
                  
                    <Projects bg={'grey'} />
                   
                    <Contact bg={'white'} />
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