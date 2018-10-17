import React from 'react';

class SingleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    const { showPopup } = this.state;

    this.setState({
      showPopup: !showPopup,
    });
  }

  render() {
    const { content } = this.props;
    const { imgurl, title, price } = content;
    const { showPopup } = this.state;
    const { togglePopup } = this;
    return (
      <div className="singleBox">
        <div className="singlebox-img-wrapper">
        {/* uid, title, brand, condition, size, price, imgurl */}
         <img className="imgBox" src={imgurl} alt="shoe-img" />
        </div>
        {/* <h4>imgurl: {this.props.content.imgurl}</h4> */}
        {/* <h4>brand: {this.props.content.brand}</h4> */}
        <div className="singlebox-info-wrapper">
          <h5>{title}</h5>
          <h5 className="singlebox-price">{'$' + price}</h5>
        </div>
        <div className="singlebox-btn-wrapper">
          <button className="fas fa-heart"></button>
          <button className="far fa-heart"></button>
          <button className="btn btn-outline-primary singlebox-showdetail-btn" onClick={this.togglePopup}>Show more details</button>
        </div>
        {/* <h4>size: {this.props.content.size}</h4> */}
        {/* <h4>condition: {this.props.content.condition}</h4> */}
        {/* <button className="detail-button" onClick={togglePopup}>Show more details</button> */}
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
    imgurl, brand, title, price, size, condition,
  } = allProps;
  const { togglePopup } = props;

  return (
    <div className="popup">
      <img className="innerImgBox" src={imgurl} />
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
        {' $'}
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
      <button onClick={togglePopup}>Close</button>
    </div>
  );
};

export default SingleBox;
