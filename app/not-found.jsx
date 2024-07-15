import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center mt-8">
      <h2 className="text-3xl mb-8">There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the <Link href="/" className="font-bold">home page</Link>.
      </p>
    </main>
  );
}
