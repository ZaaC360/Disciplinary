import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero */}

      <section className="pt-10 pb-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">

          <div className="flex flex-col items-center justify-center text-center">

            <h1 className="text-6xl font-family: 'Poppins', sans-serif">
              Organize Tasks.
              <br />
              Track Discipline.
              <br />
              Improve Productivity.
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8 max-w-2xl">
              Disciplinary helps educational institutes and teams manage
              assignments, monitor disciplinary records, and keep everyone
              accountable from one centralized platform.
            </p>

            <div className="mt-10 flex gap-4">

              <Link href="/register">
                <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl text-white font-semibold transition">
                  Get Started
                </button>
              </Link>

              <button className="border px-7 py-4 rounded-xl hover:bg-gray-100 transition">
                Learn More
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl text-center">
            Everything in one place
          </h2>

          <p className="text-center text-gray-500 mt-4">
            Designed for schools, universities, and organizations.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl mb-4">
                Task Tracking
              </h3>

              <p className="text-gray-600">
                Assign work, track deadlines, monitor progress,
                and reduce missed submissions.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl mb-4">
                Discipline Monitoring
              </h3>

              <p className="text-gray-600">
                Record incidents, warnings, and disciplinary
                actions with complete transparency.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">

              <h3 className="text-xl mb-4">
                Secure Dashboard
              </h3>

              <p className="text-gray-600">
                Role-based authentication ensures that
                administrators, teachers, and students only
                access relevant information.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Workflow */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-4xl text-center">
            Simple Workflow
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-20">

            <div>
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
                1
              </div>

              <h3 className="mt-5 text-2xl">
                Create
              </h3>

              <p className="mt-3 text-gray-600">
                Add students, teachers, tasks, and discipline
                records.
              </p>

            </div>

            <div>

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
                2
              </div>

              <h3 className="mt-5 text-2xl">
                Monitor
              </h3>

              <p className="mt-3 text-gray-600">
                Track task completion, attendance,
                and behavioral reports.
              </p>

            </div>

            <div>

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl">
                3
              </div>

              <h3 className="mt-5 text-2xl">
                Improve
              </h3>

              <p className="mt-3 text-gray-600">
                Generate insights that help improve
                accountability and performance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="bg-blue-600 text-white py-20">

        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <h1 className="text-5xl">5K+</h1>
            <p className="mt-3">Tasks Managed</p>
          </div>

          <div>
            <h1 className="text-5xl">98%</h1>
            <p className="mt-3">Completion Rate</p>
          </div>

          <div>
            <h1 className="text-5xl">150+</h1>
            <p className="mt-3">Organizations</p>
          </div>

          <div>
            <h1 className="text-5xl">24/7</h1>
            <p className="mt-3">Availability</p>
          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="py-8 border-t">

        <div className="max-w-7xl mx-auto px-8 flex justify-between">

          <h2 className="text-2xl">
            Disciplinary
          </h2>

          <p className="text-gray-500">
            © 2026 All Rights Reserved
          </p>

        </div>

      </footer>

    </main>
  );
}