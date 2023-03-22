import classes from "./SearchedSection.module.css";

const SearchedSection = ({ children }) => {
  return (
    <section className={classes["searched-wrapper"]}>
      <div className={classes["searched-container"]}>{children}</div>
    </section>
  );
};

export default SearchedSection;
