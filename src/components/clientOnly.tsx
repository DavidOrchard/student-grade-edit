// https://stackoverflow.com/questions/74022328/how-to-solve-react-hydration-error-in-next-js-when-using-uselocalstorage-and

import React from 'react';

// @ts-ignore
export const ClientOnly = ({ children, ...delegated }) => {
    const [hasMounted, setHasMounted] = React.useState(false);
    React.useEffect(() => {
      setHasMounted(true);
    }, []);
    if (!hasMounted) {
      return null;
    }
    /**
     * Could also replace the <div></div> with
     * <></> and remove ...delegated if no need
     */
    return (
      <div {...delegated}> 
        {children}
      </div>
    );
  }
  