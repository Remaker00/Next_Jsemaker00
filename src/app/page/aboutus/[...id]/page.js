"use client"

import { useSearchParams } from "next/navigation";

export default function DeveloperDetails() {

  const searchP = useSearchParams();
  const person = searchP.get('name')
  const role1 = searchP.get('role');
  const result = JSON.parse(person)
  const result1 = JSON.parse(role1)
  console.log(result,result1);

  return (
    <div>
    <h2>Name: {result}</h2>
    <p>Role: {result1}</p>
    </div>
  );
}
