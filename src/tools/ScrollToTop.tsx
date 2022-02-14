import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children } : any) {
  useEffect(() => {
    const main = document.querySelector('main');
    history.listen(() => {
      if(main) main.scrollTo(0, 0);
    });
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
