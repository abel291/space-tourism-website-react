import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./index.css"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/destination" component={Destination} />
                    <Route path="/crew" component={Crew} />
                    <Route path="/technology" component={Technology} />
                </Switch>
            </Router>
        </>
    )
}

export default App
