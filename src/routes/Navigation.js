import Home from '../pages/Home';
import Details from '../pages/Details';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';
import { useEffect } from 'react';

function Navigation(props) {
  useEffect(() => {
    props.getCountryDetails();
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/user/:id" component={Details} />
        <Route exact path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountryDetails: () =>
      dispatch({
        type: actionTypes.COUNTRY_DETAILS,
      }),
  };
};

export default connect(null, mapDispatchToProps)(Navigation);
