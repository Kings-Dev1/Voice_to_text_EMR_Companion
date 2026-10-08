import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  House,
  History,
  Smartphone,
  Settings,
  Shield,
  SlidersHorizontal,
  Menu,
  X,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    label: "Home",
    path: "/home",
    icon: House,
  },
  {
    label: "History",
    path: "/history",
    icon: History,
  },
  {
    label: "Devices",
    path: "/devices",
    icon: Smartphone,
  },
];

const settingsItems = [
  {
    label: "Widget",
    path: "/settings/widget",
    icon: SlidersHorizontal,
  },
  {
    label: "General",
    path: "/settings/general",
    icon: Settings,
  },
  {
    label: "Privacy",
    path: "/settings/privacy",
    icon: Shield,
  },
];

function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      {!mobileOpen && (
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label="Open navigation"
        >
          <Menu size={20} strokeWidth={1.8} />
        </button>
      )}

      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          onClick={closeMobileSidebar}
          className="fixed inset-0 z-40 bg-slate-950/40 md:hidden"
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-72 flex-col
          border-r border-slate-800 bg-slate-950 text-white shadow-xl
          transition-transform duration-300 ease-in-out

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}

          md:static md:z-auto md:min-h-screen md:translate-x-0
          md:transition-[width] md:duration-300
          ${collapsed ? "md:w-20" : "md:w-64"}
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-5">
          <div className="md:hidden">
            <h1 className="text-lg font-semibold tracking-tight">
              Voice-to-Text
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              EMR Companion
            </p>
          </div>

          <div className={`${collapsed ? "hidden" : "hidden md:block"}`}>
            <h1 className="text-lg font-semibold tracking-tight">
              Voice-to-Text
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              EMR Companion
            </p>
          </div>

          {/* Mobile close */}
          <button
            type="button"
            onClick={closeMobileSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white md:hidden"
            aria-label="Close navigation"
          >
            <X size={20} strokeWidth={1.8} />
          </button>

          {/* Desktop collapse */}
          <button
            type="button"
            onClick={onToggle}
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-800 hover:text-white md:flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight size={19} strokeWidth={1.8} />
            ) : (
              <ChevronLeft size={19} strokeWidth={1.8} />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:hidden">
            Workspace
          </p>

          {!collapsed && (
            <p className="mb-3 hidden px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:block">
              Workspace
            </p>
          )}

          <div className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.label : undefined}
                  onClick={closeMobileSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    } ${
                      collapsed
                        ? "md:justify-center"
                        : ""
                    }`
                  }
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <span
                    className={
                      collapsed
                        ? "md:hidden"
                        : "block"
                    }
                  >
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </div>

          <p className="mb-3 mt-9 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:hidden">
            Settings
          </p>

          {!collapsed && (
            <p className="mb-3 mt-9 hidden px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 md:block">
              Settings
            </p>
          )}

          <div className="space-y-2">
            {settingsItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  title={collapsed ? item.label : undefined}
                  onClick={closeMobileSidebar}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    } ${
                      collapsed
                        ? "md:justify-center"
                        : ""
                    }`
                  }
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <span
                    className={
                      collapsed
                        ? "md:hidden"
                        : "block"
                    }
                  >
                    {item.label}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* System status */}
        <div className="border-t border-slate-800 p-4">
          <div
            className={`rounded-xl bg-slate-900 ${
              collapsed
                ? "md:flex md:justify-center md:p-3"
                : "px-3 py-3"
            }`}
            title={collapsed ? "System ready" : undefined}
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />

              <div
                className={
                  collapsed
                    ? "md:hidden"
                    : "block"
                }
              >
                <p className="text-xs font-semibold text-white">
                  System ready
                </p>

                <p className="mt-0.5 text-[11px] text-slate-500">
                  Desktop connected
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;