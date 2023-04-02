import classes from "./BookmarkResult.module.css";

const BookmarkResult = ({ title }) => {
  return (
    <section className={classes["bookmark-result__wrapper"]}>
      <h1 className={classes["bookmark-heading"]}>{title}</h1>
    </section>
  );
};

export default BookmarkResult;
