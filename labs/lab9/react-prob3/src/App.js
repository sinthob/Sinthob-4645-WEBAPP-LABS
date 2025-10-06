//import logo from './logo.svg';
//import { GitHubAvatar } from "./GitHubComponents";
import GitHubInfo from "./GitHubInfo";
import { users } from "./users";
import './App.css';


function App() {
  return (
    <main>

      <GitHubInfo userInfo={users[0]} />
 
      <GitHubInfo userInfo={users[1]} />
 
      <GitHubInfo userInfo={users[2]} />
  
    </main>
  );
}


export default App;