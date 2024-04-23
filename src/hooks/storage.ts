import React from "react";
export const useLocalStorage = (key:string, defaultValue:boolean | string | number | String | Number) => {
  const [value, setValue] = React.useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
