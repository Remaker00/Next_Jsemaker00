import MeetupList from "../../components/meetups/MeetupList"
import Layout from "../../components/layout/Layout"

const Dummy_meetups = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://imgs.search.brave.com/HIgyJYL0Uppgz2rEzTSo5MdQlh2bQIHVZpoYD2kYcxs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTc2/NTM1MTQvcGhvdG8v/bWFpbi1mYWNhZGUt/b2Ytcm95YWwtcGFs/YWNlLWluLWNhc3Rl/bGxvLXNxdWFyZS10/dXJpbi1pdGFseS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZGZEVkFRUi04THN6/bkNHX0tmQ19MMmht/Yk1XR3Yya21mYnRD/UGQ5WUFrST0',
    address: 'Some address 221B, Baker Street',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://imgs.search.brave.com/HIgyJYL0Uppgz2rEzTSo5MdQlh2bQIHVZpoYD2kYcxs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTc2/NTM1MTQvcGhvdG8v/bWFpbi1mYWNhZGUt/b2Ytcm95YWwtcGFs/YWNlLWluLWNhc3Rl/bGxvLXNxdWFyZS10/dXJpbi1pdGFseS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZGZEVkFRUi04THN6/bkNHX0tmQ19MMmht/Yk1XR3Yya21mYnRD/UGQ5WUFrST0',
    address: 'Some address 221B, Baker Street',
    description: 'This is a second meetup!'
  }
]

export default function Home() {
  return <Layout><MeetupList meetups={Dummy_meetups} /></Layout>
}
