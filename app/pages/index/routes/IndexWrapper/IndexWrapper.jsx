import React, { PropTypes } from 'react';

import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer/Footer';

const IndexWrapper = ({ children }) => {
  return (<div>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
  </div>);
};

IndexWrapper.propTypes = {
  children: PropTypes.object
};

export default IndexWrapper;
