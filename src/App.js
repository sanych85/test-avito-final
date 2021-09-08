import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from './pages/News';
import SingleNew from './pages/SingleNews';
import Page404 from './pages/Page404';
import store from './redux/store';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header href="./" text = "Hacker news" />
        <Main>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={News}></Route>
              <Route path="/news/:id" component={SingleNew}></Route>
              <Route path="*" component={Page404}></Route>
            </Switch>
          </BrowserRouter>
        </Main>
        <Footer />
      </div>
    </Provider>
  );
}

const Main = styled.main`
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  /* justify-content: center;
align-items: center; */
`;

export default App;
