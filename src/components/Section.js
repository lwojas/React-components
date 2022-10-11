import Sectionheader from "./SectionHeader";
import Uspitem from "./UspItem";
import Sectionline from "./SectionLine";

const Section = (props) => {
  const usps = props.usps;
  return (
    <>
      <div className={`section ${props.cssClass}`}>
        <Sectionheader
          badge={props.badge}
          title={props.sectionTitle}
          description={props.description}
        />
        <div className="component-usp-row">
          {usps.map((usp, index) => (
            <Uspitem key={index} imgsrc={usp.imgsrc} uspTitle={usp.title} />
          ))}
        </div>
      </div>
      <Sectionline />
    </>
  );
};

export default Section;
