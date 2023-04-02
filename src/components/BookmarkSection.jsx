import classes from "./BookmarkSection.module.css";

const BookmarkSection = ({ children, title }) => {
  return (
    <section className={classes["bookmark-wrapper"]}>
      <h1 className={classes["bookmark-heading"]}>{title}</h1>
      <div className={classes["bookmark-container"]}>{children}</div>
    </section>
  );
};

export default BookmarkSection;
