import "./Button.scss";

const Button = ({
  content,
  type,
  classList,
  styleBtnHerro,
  boxSizing,
  border,
  background,
}) => {
  return (
    <div>
      <button
        className={classList}
        style={{
          ...styleBtnHerro, // agar bu ob'ekt bo'lsa, uni spread qilib qo'shishingiz mumkin
          border: border, // bu to'g'ridan-to'g'ri qiymat sifatida qo'shiladi
          boxSizing: boxSizing, // to'g'ridan-to'g'ri qiymat
          background: background,
          // to'g'ridan-to'g'ri qiymat
        }}
        type={type}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
