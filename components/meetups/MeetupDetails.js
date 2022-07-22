const MeetupDetails = (props) => {
  return (
    <div className="dialog detail">
      <div className="detail__container">
        <h2>{props.data.title}</h2>
        <div className="detail__img-container">
          <a title="Open in a Full-Screen" href={props.data.image}>
            <picture>
              <img src={props.data.image}></img>
            </picture>
          </a>
        </div>
        <div className="detail__text">
          <div>{props.data.description}</div>
          <h3>Address: {props.data.address}</h3>
        </div>
      </div>
    </div>
  );
};

export default MeetupDetails;
