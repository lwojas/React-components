import Titlebadge from "./TitleBadge";

const Sectionheader = (props) => (
  <div className="component-section-header">
    <Titlebadge title={props.badge} />
    <h2>
      <div className="component-title ">{props.title}</div>
    </h2>
    <div className="description">{props.description}</div>
  </div>
);

export default Sectionheader;
