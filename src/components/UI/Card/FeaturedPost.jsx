import "./FeaturedPost.scss";

const FeaturedPost = (props) => {
  const { img, title, desc, name } = props;

  return (
    <div className="featuredpostcard">
      <img src={img} alt="" />
      <span>{title}</span>
      <h3>{desc}</h3>
      <p>By {name}</p>
    </div>
  );
};

export default FeaturedPost;
