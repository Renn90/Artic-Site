import "./HamburgerMenu.css";

const HamburgerMenu = (props) => {
  return (
    <div className="body">
      <div className={`menu ${props.data}`}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
