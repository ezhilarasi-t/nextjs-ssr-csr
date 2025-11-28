import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next Js Client side rendering and server side rendering example</h1>
      <ul>
        <li>
          <Link href="/csr">Client side rendering (CSR)</Link>
        </li>
        <li>
          <Link href="/csr">Server side rendering (SSR)</Link>
        </li>
      </ul>
    </div>
  );
}
