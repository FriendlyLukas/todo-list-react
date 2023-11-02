import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">
        {title}
        {extraHeaderContent}
      </h2>
    </header>
    <div className="section__body">{body}</div>
  </section>
);

export default Section;
