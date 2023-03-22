import classes from "./MovieSection.module.css";

const MovieSection = ({ children, title }) => {
  return (
    <section className={classes["movie-wrapper"]}>
      <h1 className={classes["movie-heading"]}>{title}</h1>
      <div className={classes["movie-container"]}>{children}</div>
    </section>
  );
};

export default MovieSection;
