
import { Archive, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="topbar">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Archive size={22} />
        </span>

        <span>
          <strong>The Programming Archives</strong>
          <small>Department of Computing · Est. 2026</small>
        </span>
      </Link>

      <div className="topbar-right">
        <div className="archive-status">
          <span className="status-dot" />
          ARCHIVE ACCESS
        </div>

        <Link to="/algorithms" className="header-index">
          <Search size={16} />
          <span>Index</span>
        </Link>
      </div>
    </header>
  );
}
