import UserForm from '../components/UserForm';
import { withRouter, useLocation } from 'react-router-dom';
function Details(props) {
  const location = useLocation();
  return (
    <div className="App">
      <UserForm user={location.state?.user} />
    </div>
  );
}

export default withRouter(Details);
