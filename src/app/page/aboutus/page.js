import Link from "next/link";

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }

];

export default function About() {
  return (
    <div>
      <h2>Developer List</h2>
      <ul>
        {details.map((developer) => (
          <li key={developer.id}>
            <Link
              href={{
                pathname: `/page/aboutus/${developer.id}`,
                query: { name: JSON.stringify(developer.name), role: JSON.stringify(developer.role) },
              }}
            >
              {developer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
