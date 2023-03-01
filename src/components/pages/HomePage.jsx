import TrendingSection from "../TrendingSection";
import TrendingCard from "../UI/TrendingCard";

import MovieData from "../../data.json";

const HomePage = () => {
  return (
    <div>
      <TrendingSection>
        {MovieData.map((movie) => (
          <TrendingCard
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
