import "./LatestCard.scss";

const LatestCard = (props) => {
  const { img, title, desc, name } = props;
  return (
    <div className="latestcard">
      <img src={img} alt="" />
      <span>{title}</span>
      <h3>{desc}</h3>
      <p>By {name}</p>
    </div>
  );
};

export default LatestCard;
