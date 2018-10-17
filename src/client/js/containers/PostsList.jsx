import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SingleBox from '../components/SingleBox';

const mapStateToProps = store => ({
  listings: store.posts.listings,
});

const mapDispatchToProps = dispatch => ({
  togglePopup: (postId) => {
    dispatch(actions.togglePopup(postId));
  },
  getListing: () => {
    dispatch(actions.getListing());
  },
});

class PostsList extends Component {

  // componentDidMount() {
  //   const { getListing } = this.props;
  //   getListing();
  // }

  render() {
    this.props.getListing();
    let { listings } = this.props;
    let listingPosts = listings.map((element) =>{
      return (
      <SingleBox content={element} togglePopup={this.props.togglePopup}/>
      )
    });

    return(
      <div>
        { listingPosts }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
