import classes from "./TrendingSection.module.css";

const TrendingSection = ({ children, title }) => {
  return (
    <section className={classes["trending-wrapper"]}>
      <h1 className={classes["trending-heading"]}>{title}</h1>
      <div className={classes["trending-container"]}>{children}</div>
    </section>
  );
};

export default TrendingSection;
