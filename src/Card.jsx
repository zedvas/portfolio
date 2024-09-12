export const Card = ({
  fullStack,
  imageSrc,
  title,
  description,
  tools,
  githubLink,
  githubLinkBackend,
  demoLink,
  portfolio,
}) => {
  return (
    <div className={fullStack ? "card fullstack" : "card"}>
      <div className="imageContainer">
        <img src={imageSrc} />
        <div className="textContainer">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="infoContainer">
        <div className="techContainer">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
      <div className="buttonContainer">
        {fullStack ? (
          <>
            <button>
              <a href={githubLink} target="_blank">
                Github - Front end
              </a>
            </button>
            <button>
              <a href={githubLinkBackend} target="_blank">
                Github - Back end
              </a>
            </button>
          </>
        ) : (
          <button>
            <a href={githubLink} target="_blank">
              Github
            </a>
          </button>
        )}
        {!portfolio && <button>
          <a href={demoLink} target="_blank">
            Live demo
          </a>
        </button>}
        
      </div>
    </div>
  );
};
