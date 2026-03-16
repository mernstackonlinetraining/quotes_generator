import "./button.css";

const Button = (props) => {
  const { name = "", isLoading = false, onClick = {} } = props;
  return (
    <div>
      <button onClick={(e) => onClick(e)}>
        {isLoading ? "Loading..." : name || "Search"}
      </button>
    </div>
  );
};
export default Button;
