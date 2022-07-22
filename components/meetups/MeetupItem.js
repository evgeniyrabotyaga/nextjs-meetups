import { useRouter } from "next/router";

const MeetupItem = (props) => {
  const router = useRouter();
  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="meetup__item">
      <div className="meetup__image-container">
        <picture>
          <img alt="meetup" src={props.image}></img>
        </picture>
      </div>
      <div className="meetup__text-container">
        <h2>{props.title}</h2>
        <p>{props.address}</p>
      </div>
      <button onClick={showDetailsHandler} type="button">
        Show Details
      </button>
    </li>
  );
};

export default MeetupItem;
