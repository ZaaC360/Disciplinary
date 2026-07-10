import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-bold">Task Manager</h1>
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          <Link href="/login">Login</Link></button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          <Link href="/register">Register</Link></button>
      </div>
    </div>
  );
}
