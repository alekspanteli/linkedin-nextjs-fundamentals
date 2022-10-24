import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <nav className="flex gap-1">
        <Link href="/">Home page</Link>
        <Link href="/contacts">Contacts</Link>
        <Link href="/news">News</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
