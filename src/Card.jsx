export const Card = ({
  fullStack,
  imageSrc,
  title,
  description,
  tools,
  githubLink,
  githubLinkBackend,
  demoLink,
}) => {
  return (
    <div className={fullStack ? "card fullstack" : "card"}>
              <h2>{title}</h2>
<div className="imageContainer">
        <img src={imageSrc} />
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
           <>
              <button>
                <a href={githubLink} target="_blank">
                  Front end
                </a>
              </button>
              <button>
                <a href={githubLinkBackend} target="_blank">
                  Back end
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
          <button>
            <a href={demoLink} target="_blank">
              Live demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
