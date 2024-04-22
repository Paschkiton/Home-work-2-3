export const Card = (props) => {
    return (
      <div className="card">
        <img src={props.src} alt={props.alt} />
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    );
  };