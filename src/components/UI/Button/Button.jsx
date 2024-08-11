import "./Button.scss";

const Button = ({ content, type, classList, styleBtnHerro }) => {
  return (
    <div>
      <button className={classList} style={styleBtnHerro} type={type}>
        {content}
      </button>
    </div>
  );
};

export default Button;
