
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { algorithms } from "../data/algorithms";
import { classes } from "../data/classes";

export default function AlgorithmSheet() {
  const { id } = useParams();
  const algorithm = algorithms.find((item) => item.id === id);

  if (!algorithm) {
    return (
      <div className="empty-state">
        <h2>Document not found</h2>
        <Link to="/algorithms">Return to the index</Link>
      </div>
    );
  }

  const relatedClasses = classes.filter((item) =>
    algorithm.classIds.includes(item.id)
  );

  return (
    <article className="document-page">
      <Link to="/algorithms" className="back-link">
        <ArrowLeft size={16} />
        Back to Algorithm Index
      </Link>

      <div className="document-sheet">
        <div className="document-topline">
          <span>THE PROGRAMMING ARCHIVES</span>
          <span>TECHNICAL DOCUMENT</span>
        </div>

        <div className="document-heading">
          <div>
            <span className="document-code">{algorithm.code}</span>
            <h1>{algorithm.name}</h1>
            <p className="document-subtitle">
              {algorithm.category} / {algorithm.paradigm}
            </p>
          </div>
          <div className="document-stamp">VERIFIED<br />RECORD</div>
        </div>

        <section className="document-section">
          <h2>01 / Description</h2>
          <p>{algorithm.description}</p>
        </section>

        <div className="spec-grid">
          <div>
            <span>INPUT</span>
            <p>{algorithm.input}</p>
          </div>
          <div>
            <span>OUTPUT</span>
            <p>{algorithm.output}</p>
          </div>
          <div>
            <span>TIME COMPLEXITY</span>
            <p>{algorithm.timeComplexity}</p>
          </div>
          <div>
            <span>SPACE COMPLEXITY</span>
            <p>{algorithm.spaceComplexity}</p>
          </div>
        </div>

        <section className="document-section">
          <h2>02 / Procedure</h2>
          <ol className="procedure-list">
            {algorithm.steps.map((step, index) => (
              <li key={step}>
                <span className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="document-section">
          <h2>03 / Pseudocode</h2>
          <pre className="code-paper">
            <code>{algorithm.pseudocode}</code>
          </pre>
        </section>

        <section className="document-section">
          <h2>04 / Additional Notes</h2>
          <p>
            <strong>Stability:</strong> {algorithm.stable}
          </p>
        </section>

        <section className="document-section">
          <h2>05 / Related Class Files</h2>
          {relatedClasses.length ? (
            <div className="related-documents">
              {relatedClasses.map((item) => (
                <Link
                  key={item.id}
                  to={`/classes/${item.id}`}
                  className="related-document"
                >
                  <FileText size={18} />
                  <span>
                    <strong>{item.code} — {item.title}</strong>
                    <small>Open original class record</small>
                  </span>
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          ) : (
            <p>No linked class records yet.</p>
          )}
        </section>

        <div className="document-footer">
          <span>{algorithm.code}</span>
          <span>END OF DOCUMENT</span>
        </div>
      </div>
    </article>
  );
}
