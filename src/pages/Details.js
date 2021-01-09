import UserForm from '../components/UserForm';
import { withRouter, useLocation } from 'react-router-dom';
function App(props) {
  const location = useLocation();
  console.log(props);
  return (
    <div className="App">
      <UserForm user={location.state?.user} />
    </div>
  );
}

export default withRouter(App);
