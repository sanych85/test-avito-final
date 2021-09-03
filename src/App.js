import { Provider } from "react-redux";
import "./App.css"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import News from "./pages/News";
import SingleNew from "./pages/SingleNews";
import Test from "./pages/Test";
import store from "./redux/store";
import {OneNews} from "./components"
function App() {
const route = "https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/23208170#overview"
  return (
    <Provider store = {store}>
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path = "/" exact component = {News}></Route>
              <Route path = "/news/:id" component = {SingleNew}></Route>
              
            </Switch>
          </BrowserRouter>
      
      </div>
    </Provider>
  );
}

export default App;
