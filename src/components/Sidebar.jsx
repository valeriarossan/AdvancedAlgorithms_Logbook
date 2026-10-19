
import { Archive, FileText, House, Library, UserRound, ScrollText,} from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio", icon: House, end: true },
  { to: "/profile", label: "About the Author", icon: UserRound },
  { to: "/classes", label: "Registros de clase", icon: FileText },
  { to: "/missions", label: "Misiones", icon: ScrollText },
  { to: "/algorithms", label: "Índice de algoritmos", icon: Library },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-heading">
        <span>ÍNDICE DEL ARCHIVO</span>
        <Archive size={15} />
      </div>

      <nav className="sidebar-nav">
        {links.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <Icon size={18} strokeWidth={1.6} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-note">
        <span className="stamp">ARCHIVO PERSONAL</span>
        <p>
          Cada problema resuelto deja una pista.
          Cada error, una lección.
        </p>
        <span className="sidebar-note-footer">
          CONSERVAR · ESTUDIAR · APRENDER
        </span>
      </div>

      <div className="sidebar-footer">
        <span>ARCHIVE No. 001</span>
        <span>2026</span>
      </div>
    </aside>
  );
}
