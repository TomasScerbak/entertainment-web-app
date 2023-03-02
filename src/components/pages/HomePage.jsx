import TrendingSection from "../TrendingSection";
import TrendingCard from "../UI/TrendingCard";

import MovieData from "../../data.json";

const HomePage = () => {
  return (
    <div>
      <TrendingSection>
        {MovieData.filter((movies) => movies.isTrending).map((movie) => (
          <TrendingCard
            key={movie.title}
            title={movie.title}
            year={movie.year}
            category={movie.category}
            rating={movie.rating}
          />
        ))}
      </TrendingSection>
    </div>
  );
};

export default HomePage;
