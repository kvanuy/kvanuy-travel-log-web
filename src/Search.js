import { SearchBox } from "@mapbox/search-js-react";

export function Component() {
  const [value, setValue] = React.useState('');

  const handleChange = (d) => {
    setValue(d);
  };
  return (
    <SearchBox
      options={{
        proximity: {
          lng: -122.431297,
          lat: 37.773972,
        },
      }}
      value={value}
      onChange={handleChange}
      accessToken="pk.eyJ1Ijoia3ZhbnV5IiwiYSI6ImNtZGt6a3JrMDB5a2cya3E3Y2UyNjNlMzIifQ.eKLmC5NnBZhCdk8CfeyXmg"
    />
  );
}