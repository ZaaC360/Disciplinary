import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <header className="bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

                    <h1 className="text-3xl ">
                        Disciplinary
                    </h1>

                    <div className="flex items-center gap-4">

                        <Link href="/login">
                            <button className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                                Login
                            </button>
                        </Link>

                        <Link href="/register">
                            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition">
                                Register
                            </button>
                        </Link>

                    </div>

                </div>
            </header>
        </>
    )
}