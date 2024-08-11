import "./Button.scss";

const Button = ({ content, type, classList }) => {
  return (
    <div>
      <button className={classList} type={type}>
        {content}
      </button>
    </div>
  );
};

export default Button;
