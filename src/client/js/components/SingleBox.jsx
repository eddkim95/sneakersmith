import React, { Component } from 'react';

class SingleBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imgurl, user, title, price, id, showPopup, togglePopup } = this.props;
    const content = this.props;
    console.log('pop up content: ', content);

    return (
      <div className="singleBox">
        {/* uid, title, brand, condition, size, price, imgurl */}
        <img className="imgBox" src={imgurl} alt="shoe-img" />
        {/* <h4>imgurl: {this.props.content.imgurl}</h4> */}
        {/* <h4>brand: {this.props.content.brand}</h4> */}
        <h4>{user}</h4>
        <h4>{title}</h4>
        <h4>{price}</h4>
        {/* <h4>size: {this.props.content.size}</h4> */}
        {/* <h4>condition: {this.props.content.condition}</h4> */}
        <button className="detail-button" onClick={() => togglePopup(id)}>Show more details</button>
        {showPopup
          ? (
            <Popup
              text="Close Me"
              togglePopup={togglePopup}
              allProps={content}
            />
          ) : null
        }
      </div>
    );
  }
}

const Popup = (props) => {
  const { allProps } = props;
  const {
    user, id, imgurl, brand, title, price, size, condition,
  } = allProps;
  const { togglePopup } = props;

  return (
    <div className="popup">
      <img className="innerImgBox" src={imgurl} />
      <h4>
        user:
        {' '}
        {user}
      </h4>
      <h4>
        brand:
        {' '}
        {brand}
      </h4>
      <h4>
        title:
        {' '}
        {title}
      </h4>
      <h4>
        price:
        {' '}
        {price}
      </h4>
      <h4>
        size:
        {' '}
        {size}
      </h4>
      <h4>
        condition:
        {' '}
        {condition}
      </h4>
      <button onClick={() => togglePopup(id)}>Close</button>
    </div>
  );
};

export default SingleBox;
