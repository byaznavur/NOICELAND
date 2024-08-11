import "./style.scss";
import herroImg from "../../assets/images/herroimg.png";
import Button from "../UI/Button/Button";
const Intro = () => {
  const styleBtnHerro = {
    marginTop: "27px",
    color: "rgb(0, 0, 0)",
    fontFamily: "Libre Franklin",
    fontSize: "10px",
    fontWeight: "700",
    lineHeight: "12px",
    letterSpacing: "1px",
    textAlign: "left",
    textTransform: "uppercase",
  };
  return (
    <div className="container">
      <div className="herro">
        <div className="herro_img">
          <img src={herroImg} alt="Bg first image" />
        </div>

        <div className="herro_info">
          <span> Illustration </span>

          <h1>Japan House opens in mountainside to foster peak creativity</h1>

          <p>
            Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad timeam
            accusata, hinc justo falli id eum, ferri novum molestie eos cu.{" "}
          </p>

          <div className="herroBtnCenter">
            <Button
              content="By Reta Torphy"
              styleBtnHerro={styleBtnHerro}
              classList="herroBtnCenter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
