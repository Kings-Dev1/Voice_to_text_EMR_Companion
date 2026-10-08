function Home() {
  
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Heading */}
      <div>
        <p className="text-sm font-medium text-blue-600">
          Clinical workspace
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Good morning, Doctor
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Everything is ready for your next consultation.
        </p>
      </div>

      {/* Primary workspace */}
      <section className="overflow-hidden rounded-xl bg-blue-400 p-8 text-white text-xl shadow-2xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-lg shadow-emerald-300/50" />

              <span className="text-sm font-medium text-blue-100">
                Computer connected
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight">
              Ready for your next clinical note
            </h2>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Dictate from your paired phone, review the transcript,
              and send the completed note directly to this computer.
            </p>

            <button
              type="button"
              className="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Start workflow
            </button>
          </div>

          <div className="hidden h-32 w-32 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/20 lg:flex">
            <div className="h-16 w-16 rounded-full bg-white/10 p-4">
              <div className="h-full w-full rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Status cards */}
      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-lg  bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-lg text-slate-500">Paired device</p>

          <div className="mt-4 flex items-center justify-between">
            <p className="font-semibold text-slate-900">iPhone</p>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              Connected
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-sm text-slate-500">Notes today</p>

          <p className="mt-4 text-3xl font-semibold text-slate-900">
            0
          </p>

          <p className="mt-1 text-sm text-slate-500">
            No clinical notes received yet
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <p className="text-sm text-slate-500">Floating widget</p>

          <div className="mt-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/40" />

            <p className="font-semibold text-slate-900">
              Ready
            </p>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Waiting for a new note
          </p>
        </div>
      </section>

      {/* Recent activity */}
      <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2 className="font-semibold text-slate-900">
              Recent activity
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Your latest documentation activity
            </p>
          </div>

          <button
            type="button"
            className="text-sm font-medium text-blue-400 hover:text-blue-600"
          >
            View history
          </button>
        </div>

        <div className="flex min-h-32 items-center justify-center px-6">
          <p className="text-sm text-slate-400">
            No recent activity
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;