export const Card = ({ fullStack, imageSrc, title, description, tools, githubLink, githubLinkBackend, demoLink }) => {
  return (
    <div className="card">
      <div className="imageContainer">
        <img src={imageSrc} />
        <h2>{title}</h2>
      </div>
      <div className="infoContainer">
      <p>{description}</p>
      <div className="techContainer">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <div className="buttonContainer">
        {fullStack ? (
          <div>
            <button><a href={githubLink} target="_blank">Github<span>Front end</span></a></button>
            <button><a href={githubLinkBackend} target="_blank">Github<span>Back end</span></a></button>
          </div>
        ) : (
          <button><a href={githubLink} target="_blank">Github</a></button>
        )}
        <button><a href={demoLink} target="_blank">Live demo</a></button>
      </div>
    </div></div>
  );
};
