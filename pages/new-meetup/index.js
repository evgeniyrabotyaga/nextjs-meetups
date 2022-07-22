import NewMeetupForm from "../../components/meetups/NewMeetupForm";

import Head from "next/head";
import { useRouter } from "next/router";

const AddNewMeetup = () => {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch(
      `https://nextjs-meetups-a635f-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`,
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    console.log(data);
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <div className="dialog new-meetup">
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </div>
    </>
  );
};

export default AddNewMeetup;
