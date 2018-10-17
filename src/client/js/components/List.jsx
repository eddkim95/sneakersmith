import React, { Fragment } from 'react';
import SingleBox from './SingleBox';

const List = (props) => {
  // map through the array? to display
  const { listing } = props;
  const singleBoxArr = listing.map(element => <SingleBox key={element.key} content={element} />);

  return (
    <Fragment>
      {singleBoxArr}
    </Fragment>
  );
};

export default List;
