export const Poster = (props) => {
    return (
      <div className="poster">
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    );
  };