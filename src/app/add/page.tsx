
import { db } from "@/db";
import { person } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function Home() {

  // const data = await db.insert(person).values({ id: 2, userName: "John", userCountry: "USA" });

  const data = await db
    .select({ id: person.id })
    .from(person)
    .orderBy(desc(person.id))
    .limit(1);

  const lastId = data[0]?.id;
  console.log(data);
  console.log(lastId);
  const newid = lastId! + 1;
  const newdata = await db.insert(person).values({ id: newid, userName: "John", userCountry: "USA" });
  console.log(newdata);
  return (
    <div>id is {lastId}</div>
  );
}
