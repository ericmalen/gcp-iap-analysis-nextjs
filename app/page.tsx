import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center p-4">
      <Link href={"/dashboard"} className="rounded-xl border p-3 bg-blue-200 hover:bg-blue-400">
        Go to Dashboard
      </Link>
    </main>
  )
}
