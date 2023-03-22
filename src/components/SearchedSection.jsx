import classes from "./SearchedSection.module.css";

const SearchedSection = ({ children, props }) => {
  return (
    <section className={classes["searched-wrapper"]}>
      <h1 className={classes["searched-heading"]}>
        Found 2 results for 'Earth'
      </h1>
      <div className={classes["searched-container"]}>{children}</div>
    </section>
  );
};

export default SearchedSection;
