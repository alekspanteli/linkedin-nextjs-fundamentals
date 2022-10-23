import Link from "next/link";
import contacts from "../api/contacts";

export default function Contacts() {
  return (
    <>
      <h1 className="text-lg text-blue-700 font-bold">Contacts</h1>
      <nav>
        <ul>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                <Link href={`contacts/${contact.id}`}>{contact.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
