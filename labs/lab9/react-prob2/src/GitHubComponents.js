export function GitHubRepoURL({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer"
    style={{ color: 'blue',  fontWeight: 'bold', textDecoration: 'underline' , fontSize: '20px' }}>
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