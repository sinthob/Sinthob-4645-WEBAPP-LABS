export function GitHubRepoURL({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" fontSize='50px'>
      GitHub repository
    </a>
  );
}

export function GitHubAvatar({ imgURL, alt, size = 50 }) {
  return (
    <img
      src={imgURL}
      alt={alt}
      style={{ width: size, height: size }}
    />
  );
}