//import logo from './logo.svg';
import './App.css';



function GitHubAvatar() {
  return (
    <img
      src={`https://github.com/sinthob.png`}
      alt={`sinthob's avatar`}
      style={{
        width: '30%',
        height: 'auto'
      }}
    />
  );
}

function GitHubRepoURL() {
  return (
    <a
      href={`https://github.com/sinthob`}
      target="_blank"
      rel="noreferrer"
      style={{ color: 'blue',  fontWeight: 'bold', textDecoration: 'underline', fontSize: '20px' }}
    >
      My GitHub repository
    </a>
  );
}

// เอา Components GitHubAvatar and GitHubRepoURL  มาประกอบกัน
function GitHubInfo() {
  return (
    <main>
      <h1>My GitHub Information</h1>
      <GitHubAvatar />
      <GitHubRepoURL />
    </main>
  );
}


function App() {
  return (<GitHubInfo />);
}




export default App;
