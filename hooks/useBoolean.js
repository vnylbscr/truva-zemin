import React from 'react';

const useBoolean = (initialValue) => {
   const [value, setValue] = React.useState(!!initialValue);
   const toggle = () => setValue((x) => !x);
   const on = () => setValue(true);
   const off = () => setValue(false);

   return {
      value,
      toggle,
      on,
      off,
   };
};

export default useBoolean;
