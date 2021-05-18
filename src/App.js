import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.BROWSE} component={Browse} />
        <Route exact path={ROUTES.SIGN_IN} component={Signin} />
        <Route exact path={ROUTES.SIGN_UP} component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
