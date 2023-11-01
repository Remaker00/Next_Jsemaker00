"use client"
import NewMeetupForm from "../../../components/meetups/NewMeetupForm"
import Layout from "../../../components/layout/Layout";

export default function NewMeetUp() {

  function addMeetupHandler(enterdMeetupData) {
    console.log(enterdMeetupData);
  }

  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Layout>
  )
}
