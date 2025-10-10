//import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";

// 

function GitHubRepoURL({ url,alt }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" fontSize='50px'>
        {alt} 
    </a>
  );
}

function GitHubAvatar({ imgURL, alt, size = 100 }) {
  return (
    <img
      src={imgURL}
      alt={alt}
      style={{ width: size, height: size }}
    />
  );
}
///////////////////////////


export function GitHubInfo({ userInfo }) {
  const { url, imgURL, alt, followers } = userInfo;

  let showGitHubURL = "";
  if (followers > 10000){
    showGitHubURL = `( ${followers} followers )` ;
  }

  return (
    <div className="github-info">
      <GitHubAvatar imgURL={imgURL} alt={alt} />
      <GitHubRepoURL url={url} alt={alt}/>
      <span style = {{marginLeft: '10px'}}>
         {showGitHubURL} 
      </span>
    </div>
  );
}