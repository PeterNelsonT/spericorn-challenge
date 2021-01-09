import UserTable from '../components/UserTable';
import UserForm from '../components/UserForm';
function Home() {
  return (
    <div className="App">
      <UserForm />
      <UserTable />
    </div>
  );
}

export default Home;
