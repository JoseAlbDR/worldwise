import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // Create an array with all countries
  const countries = cities.map(({ country }) => country);
  // Create an array with unique countries
  const uniqueCountry = cities.filter(
    ({ country }, index) => !countries.includes(country, index + 1)
  );

  return (
    <div className={styles.countryList}>
      {uniqueCountry.map((city, index) => {
        return <CountryItem key={index} country={city} />;
      })}
    </div>
  );
}

export default CountryList;
