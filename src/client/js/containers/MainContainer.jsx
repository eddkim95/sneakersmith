import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  showPopup: store.posts.showPopup,
  user: store.posts.user,
  imgUrl: store.posts.imgUrl,
  title: store.posts.title,
  price: store.posts.price,
  brand: store.posts.brand,
  size: store.posts.size,
  condition: store.posts.condition,
  listings: store.posts.listings,
  categories: store.posts.categories,
  filterBy: store.posts.filterBy,
  isLoggedin: store.posts.isLoggedin,
  username: store.posts.username,
  password: store.posts.password,
  email: store.posts.email,
});

const mapDispatchToProps = dispatch => ({
  addCard: function(index) {
    dispatch(actions.addCard(index))
  },
});

render() {

  return (

    <PostCreator />
    <PostsList />
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
