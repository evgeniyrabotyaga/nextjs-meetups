import MeetupList from "../components/meetups/MeetupList";
import Link from "next/dist/client/link";
import { useState } from "react";
import Head from "next/head";

// const DUMMY_ARRAY = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/%D0%A7%D1%83%D0%B2%D0%B0%D1%88%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9.JPG/1920px-%D0%A7%D1%83%D0%B2%D0%B0%D1%88%D1%81%D0%BA%D0%B8%D0%B9_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%85%D1%83%D0%B4%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9.JPG",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cheboksary_Railway_Station.jpg/800px-Cheboksary_Railway_Station.jpg",
//     address: "Another address 10, 32145 Another City",
//     description: "This is a second meetup!",
//   },
// ];

// export const getServerSideProps = async (context) => {
//   const request = context.reg;
//   const response = context.req;

//   return {
//     props: {
//       meetups: DUMMY_ARRAY,
//     },
//   };
// };

const HomePage = (props) => {
  const [isLoading, setIsLoading] = useState();

  if (isLoading) return <p>Loading</p>;

  if (props.meetups.length === 0)
    return (
      <div className="dialog">
        <div className="dialog__container">
          <span>Empty List</span>
          <h2>No meetups found. Add a new one!</h2>
        </div>

        <Link href="/new-meetup">
          <a className="dialog__btn">Add Meetup</a>
        </Link>
      </div>
    );

  return (
    <>
      <Head>
        <title>NextJS Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
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
    props: {
      meetups: meetupArray,
    },
    revalidate: 1,
  };
};

export default HomePage;
