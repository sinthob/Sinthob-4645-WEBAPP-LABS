import { GitHubAvatar, GitHubRepoURL } from "./GitHubComponents";

// 
export default function GitHubInfo({ userInfo }) {
  const { url, imgURL, alt } = userInfo;
  return (
    <div className="github-info">
      <h1>{alt}</h1>
      <GitHubAvatar imgURL={imgURL} alt={alt} />
      <GitHubRepoURL url={url} />
    </div>
  );
}