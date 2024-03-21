import {useContext} from "react";
import {PopularTitle, RecentResult, RecentResultsWrapper} from "src/components/Input/Input.styles";
import { AppContext } from "src/context/AppContext";
import {Text} from "src/components/Layout/Text";

const MOST_POPULAR = ["New York", "Lisbon", "Tokyo"];

export const RecentResults = () => {

  const { recentSearches, setSearch } = useContext(AppContext);

  return (
    <RecentResultsWrapper>
      {recentSearches.map((result) => {
        return <RecentResult onClick={() => setSearch(result)} key={result}>{result}</RecentResult>
      })}
      <PopularTitle><Text color="var(--accent)">Most popular</Text></PopularTitle>
      {MOST_POPULAR.map((result) => {
        return <RecentResult onClick={() => setSearch(result)} key={result}>{result}</RecentResult>
      })}
    </RecentResultsWrapper>
  )
}