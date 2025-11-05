import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-black/[.06] bg-transparent py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold">
          Cristian
        </Link>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/skills" className="hover:underline">Skills</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/awards" className="hover:underline">Awards</Link>
          <a href="mailto:hello@cristi.example" className="rounded-full border px-3 py-1 text-sm hover:bg-black/5">Contact</a>
        </nav>
      </div>
    </header>
  );
}
