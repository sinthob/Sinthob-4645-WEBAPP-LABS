//import logo from './logo.svg';
import './App.css';
import { GitHubAvatar, GitHubRepoURL } from './GitHubComponents';


// โจทย์ให้ทำเป็น object
const userInfo = {
  url: 'https://github.com/sinthob',
  imgURL: 'https://avatars.githubusercontent.com/sinthob',
  alt: 'sinthob katasila'
};

/*
function userInfo (){
  return (
    <main>
      <h1 >sinthob katasila</h1> 
      <GitHubAvatar imgURL='https://github.com/sinthob.png' alt='Sinthob' size={200} />
      <br />
      <GitHubRepoURL url='https://github.com/sinthob' />
    </main>
  );
}
*/

function App() {
  return (
    <main>
      <h1 >{userInfo.alt}</h1> 
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <br />
      <GitHubRepoURL url={userInfo.url} />
    </main>
  );
}


export default App;
