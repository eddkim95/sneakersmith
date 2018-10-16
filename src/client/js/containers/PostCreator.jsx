import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  user: store.posts.user,
  imgUrl: store.posts.imgUrl,
  title: store.posts.title,
  price: store.posts.price,
  brand: store.posts.brand,
  size: store.posts.size,
  condition: store.posts.condition,
  categories: store.posts.categories,
  filterBy: store.posts.filterBy,
  //isLoggedin: store.posts.isLoggedin,
});

const mapDispatchToProps = dispatch => ({
  createListing: () => {
    dispatch(actions.createListing());
  },
  updateSelectedBrand: (event) => {
    dispatch(actions.updateSelectedBrand(event));
  },
  updateSelectedCondition: (event) => {
    dispatch(actions.updateSelectedCondition(event));
  },
  updateSelectedSize: (event) => {
    dispatch(actions.updateSelectedSize(event));
  },
  updatePrice: (event) => {
    dispatch(actions.updatePrice(event));
  },
  updateTitle: (event) => {
    dispatch(actions.updateTitle(event));
  },
  handleUploadImage: (event) => {
    dispatch(actions.handleUploadImage(event));
  },
  getFilters: (event) => {
    dispatch(actions.getFilters(event));
  },
  filterProducts: (event) => {
    dispatch(actions.filterProducts(event));
  },
});

class PostCreator extends Component {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCreator);
