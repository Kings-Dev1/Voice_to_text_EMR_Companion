import { NavLink } from "react-router-dom";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    label: "Home",
    path: "/home",
    icon: "⌂",
  },
  {
    label: "History",
    path: "/history",
    icon: "◷",
  },
  {
    label: "Devices",
    path: "/devices",
    icon: "◉",
  },
];

const settingsItems = [
  {
    label: "Widget",
    path: "/settings/widget",
    icon: "▣",
  },
  {
    label: "General",
    path: "/settings/general",
    icon: "⚙",
  },
  {
    label: "Privacy",
    path: "/settings/privacy",
    icon: "♢",
  },
];

function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`flex min-h-screen flex-col border-r border-slate-200 bg-slate-950 text-white shadow-xl transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-5">
        {!collapsed && (
          <div>
            <h1 className="text-lg font-semibold tracking-tight">
              Voice-to-Text
            </h1>

            <p className="mt-1 text-xs text-slate-400">
              EMR Companion
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={onToggle}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-white"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="flex-1 px-3 py-6">
        {!collapsed && (
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Workspace
          </p>
        )}

        <div className="space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <span className="flex h-5 w-5 items-center justify-center text-base">
                {item.icon}
              </span>

              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>

        {!collapsed && (
          <p className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Settings
          </p>
        )}

        <div className="space-y-2">
          {settingsItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-400 text-white shadow-lg shadow-blue-900/30"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                } ${collapsed ? "justify-center" : ""}`
              }
            >
              <span className="flex h-5 w-5 items-center justify-center text-base">
                {item.icon}
              </span>

              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="border-t border-slate-800 p-4">
        <div
          className={`rounded-xl bg-slate-900 ${
            collapsed ? "flex justify-center p-3" : "px-3 py-3"
          }`}
          title={collapsed ? "System ready" : undefined}
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

            {!collapsed && (
              <div>
                <p className="text-xs font-semibold text-white">
                  System ready
                </p>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  Desktop connected
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;