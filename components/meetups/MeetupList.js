import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul className="meetup">
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
        ></MeetupItem>
      ))}
    </ul>
  );
};

export default MeetupList;
