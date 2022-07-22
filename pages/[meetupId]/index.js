import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails data={props.meetupData} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    `https://nextjs-meetups-a635f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`
  );

  const data = await response.json();

  const meetupArray = [];

  for (const key in data) {
    const meetupObject = {
      id: key,
      ...data[key],
    };

    meetupArray.unshift(meetupObject);
  }

  const meetupId = context.params.meetupId;
  const selectedMeetup = meetupArray.find((meetup) => meetup.id === meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        title: selectedMeetup.title,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://nextjs-meetups-a635f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`
  );

  const data = await response.json();

  const meetupArray = [];

  for (const key in data) {
    const meetupObject = {
      id: key,
      ...data[key],
    };

    meetupArray.unshift(meetupObject);
  }

  return {
    fallback: false,
    paths: meetupArray.map((meetup) => ({ params: { meetupId: meetup.id } })),
  };
};

export default MeetupDetailsPage;
