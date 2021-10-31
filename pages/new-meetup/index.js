// our-domain/new-meetup
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const router = useRouter()
  // this function receives data from NewMeetupForm component
  async function addMeetupHandler(enteredMeetupData) {
    // Send request on internal API, and NextJS trigger function in the api folder
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData), // send data receives from NewMeetupForm component
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    // go to home page after sending request
    router.push('/')
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />; // send addMeetupHandler function to NewMeetupForm with props
};

export default NewMeetupPage;
