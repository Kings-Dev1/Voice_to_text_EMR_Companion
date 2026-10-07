import { User } from "lucide-react";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Application identity */}
      <div>
        <h1 className="text-base font-semibold tracking-tight text-slate-900">
          Voice-to-Text EMR
        </h1>

        <p className="mt-0.5 text-xs text-slate-500">
          Clinical documentation companion
        </p>
      </div>

      {/* Header actions */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />

          <span className="text-xs font-medium text-slate-600">
            Phone connected
          </span>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        <button
          type="button"
          className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-slate-50"
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

          <span className="text-xs text-slate-400">⌄</span>
        </button>
      </div>
    </header>
  );
}

export default Header;