
import { ArrowUpRight, FileText, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

export default function FileCard({
  code,
  title,
  description,
  to,
  type = "CLASS RECORD",
  meta,
}) {
  const isAlgorithm = type === "ALGORITHM SPECIFICATION";

  return (
    <Link to={to} className="file-card">
      <div className="file-card-top">
        <span className="file-code">{code}</span>
        <span className="file-card-icon">
          {isAlgorithm ? (
            <FlaskConical size={19} />
          ) : (
            <FileText size={19} />
          )}
        </span>
      </div>

      <div className="file-paper">
        <span className="paper-kicker">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="file-card-bottom">
        <span>{meta || "VIEW DOCUMENT"}</span>
        <ArrowUpRight size={17} />
      </div>
    </Link>
  );
}
