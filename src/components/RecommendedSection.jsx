import classes from "./RecommendedSection.module.css";

const RecommendedSection = ({ children }) => {
  return (
    <section className={classes["recommended-wrapper"]}>
      <h1 className={classes["recommended-heading"]}>Recommended for you</h1>
      <div className={classes["recommended-container"]}>{children}</div>
    </section>
  );
};

export default RecommendedSection;
