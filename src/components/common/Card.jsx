export default function Card({ title, children, className='' }) { return <div className={`card ${className}`}>{title && <div className="card-heading"><h3>{title}</h3></div>}{children}</div>; }
