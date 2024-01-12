const PrimaryButton = ({ onClick, label, color, btnType }) => {
  const buttonStyle = {
    cursor: "pointer",
  };

  return (
    <a className={`${btnType}`} style={buttonStyle} onClick={onClick}>
      {label}
    </a>
  );
};

export default PrimaryButton;
