import "./style.scss";
import herroImg from "../../assets/images/herroimg.png";
import Button from "../UI/Button/Button";

import Card from "../UI/Card";
import { data } from "../../constants/data";
import { datas } from "../../constants/db";
import LatestCard from "../UI/Card/LatestCard";
import { posts } from "../../constants/post";
import FeaturedPost from "../UI/Card/FeaturedPost";
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
      <section className="post">
        {data.map((item, i) => (
          <Card {...item} key={i} />
        ))}
      </section>
      <section className="latest">
        <h2
          style={{
            color: "rgb(153, 153, 153)",
            fontFamily: "Libre Franklin",
            fontSize: "10px",
            fontWeight: 400,
            lineHeight: "12px",
            letterSpacing: "1px",
            textAlign: "left",
            textTransform: "uppercase",
            marginBottom: "80px",
            marginTop: "30px",
          }}
        >
          LATES POST
        </h2>
        <section className="latestpost">
          {datas.map((data, i) => (
            <LatestCard {...data} key={i} />
          ))}
        </section>

        <div className="latestbutton">
          <Button
            content="view all latest posts"
            styleBtnHerro={styleBtnHerro}
            classList="herroBtnCenter"
            boxSizing=" border-box"
            border=" 1px solid rgb(0, 0, 0)"
            background="rgb(255, 255, 255)"
          />
        </div>
      </section>

      <section className="featured">
        <h2>featured POSTS</h2>
        <div className="featuredpost">
          {posts.map((post, i) => (
            <FeaturedPost {...post} key={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Intro;
