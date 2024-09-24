// app/people/page.tsx

import { db } from "@/db";
import { person } from "@/db/schema";

// Define the shape of a person object
interface Person {
  id: number;
  name: string;
  email: string;
}

async function getPeople(): Promise<any> {
  return db.select().from(person);
}

export default async function PeoplePage() {
  const people: any = await getPeople();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">People</h1>
      <ul className="space-y-2">
        {people.map((person: any) => (
          <li key={person.id} className="bg-gray-100 p-2 rounded">
            <p><strong>ID:</strong> {person.id}</p>
            <p><strong>Name:</strong> {person.userName}</p>
            <p><strong>Email:</strong> {person.userCountry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
