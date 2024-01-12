const SectionHeader = ({ labelHeader, labelSub }) => {
  const headStyle = {
    // cursor: "pointer",
  };

  return (
    <div className="section_header" style={headStyle}>
      <span>
        <h2> {labelHeader}</h2>
        <p>{labelSub}</p>
      </span>
    </div>
  );
};

export default SectionHeader;
