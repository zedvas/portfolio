export const Card = ({ fullStack, imageSrc, title, description, tools }) => {
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
            <button>Github<span>Front end</span></button>
            <button>Github<span>Back end</span></button>
          </div>
        ) : (
          <button>Github</button>
        )}
        <button>Live demo</button>
      </div>
    </div></div>
  );
};
