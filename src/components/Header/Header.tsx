import { User } from "lucide-react";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      {/* Application identity */}
      <div className="min-w-0 pl-14 md:pl-0">
        <h1 className="truncate text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
          Voice-to-Text EMR
        </h1>

        <p className="mt-0.5 hidden text-xs text-slate-500 sm:block">
          Clinical documentation companion
        </p>
      </div>

      {/* Header actions */}
      <div className="flex shrink-0 items-center gap-3 sm:gap-5">
        {/* Connection status */}
        <div
          className="flex items-center gap-2"
          title="Phone connected"
          aria-label="Phone connected"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-600" />

          <span className="hidden text-xs font-medium text-slate-600 sm:block">
            Phone connected
          </span>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        {/* Account */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition hover:bg-slate-50 sm:gap-3 sm:px-2"
          aria-label="Open account menu"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600">
            <User size={17} strokeWidth={1.8} />
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-slate-800">
              Doctor
            </p>

            <p className="text-[11px] text-slate-400">
              Account
            </p>
          </div>

          <span className="hidden text-xs text-slate-400 sm:block">
            ⌄
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;