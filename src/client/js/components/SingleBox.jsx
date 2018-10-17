import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  formToggleState: store.posts.formToggleState,
});

const mapDispatchToProps = dispatch => ({
  toggleForm: (event) => {
    dispatch(actions.toggleForm(event));
  },
  togglePopup: (event) => {
    dispatch(actions.togglePopup(event));
  },
});
class SingleBox extends Component {

  render() {
    const { imgurl, user, title, price, key, showPopup } = this.props.content;
    const { togglePopup } = this.props;
    const popupContent = this.props.content;
    console.log(this.props.content);
    //console.log('pop up content: ', content);
    const popupDisplay = [];
    if (showPopup) {
      // console.log(showPopup);
      popupDisplay.push(<Popup text="Close Me" togglePopup={togglePopup} allProps={popupContent} />);
    }

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
        <button className="detail-button" onClick={() => togglePopup(key)}>Show more details</button>
        {popupDisplay}
      </div>
    );
  }
}

const Popup = (props) => {
  const { allProps } = props;
  const { user, key, imgurl, brand, title, price, size, condition } = allProps;
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
      <button onClick={() => togglePopup(key)}>Close</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBox);
