import "./App.css";
import { GitHubInfo } from "./GitHubInfo.js";
import { users } from "./users.js";
export default function App() {
  const popularGitHubUsers = users.filter(user => user.followers > 10000);
  
 return (
   <>
     <h1>Popular GitHub Repositories</h1>
     <ol>
       {popularGitHubUsers.map((user) => (
         <li><GitHubInfo key={user.url} userInfo={user} /></li>
       ))}
     </ol>
   </>);
}