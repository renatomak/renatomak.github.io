import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from './pages/components/Header';
import Contato from './pages/Contato';
import Curriculo from './pages/Curriculo';
import GlobalStyle from './styleGlobal';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contato' component={Contato} />
        <Route path='/curriculo' component={Curriculo} />
      </Switch>
    </Router>
  );
}

export default App;
