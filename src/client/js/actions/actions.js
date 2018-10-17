import * as types from '../constants/actionTypes';
import axios from 'axios';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/paulsg10/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'savvseld';

export const togglePopup = postId => ({
  type: types.TOGGLE_POPUP,
  payload: postId,
});

export const createListing = data => ({
  type: types.CREATE_LISTING,
  payload: data,
});

export const updateSelectedBrand = event => ({
  type: types.UPDATE_SELECTED_BRAND,
  payload: event,
});

export const updateSelectedCondition = event => ({
  type: types.UPDATE_SELECTED_CONDITION,
  payload: event,
});

export const updateSelectedSize = event => ({
  type: types.UPDATE_SELECTED_SIZE,
  payload: event,
});

export const updatePrice = event => ({
  type: types.UPDATE_PRICE,
  payload: event,
});

export const updateTitle = event => ({
  type: types.UPDATE_TITLE,
  payload: event,
});

export const handleUploadImage = url => ({
  type: types.HANDLE_UPLOAD_IMAGE,
  payload: url,
});

export const handleSubmit = event => ({
  type: types.HANDLE_SUBMIT,
  payload: event,
});

// export const getFilters = () => ({
//   type: types.GET_FILTERS,
//   payload: ,
// })

// export const filterProducts = () => ({
//   type: types.FILTER_PRODUCTS,
//   payload: ,
// })

export const toggleForm = event => ({
  type: types.TOGGLE_FORM,
  payload: event,
});

export const toggleDetail = event => ({
  type: types.TOGGLE_DETAIL,
  payload: event,
});

export const displayListing = data => ({
  type: types.DISPLAY_LISTING,
  payload: data,
});

export const getListing = () => {
  return function (dispatch) {
    return fetch('/listing')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      // console.log(data);
        dispatch(displayListing(data));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};

export const uploadImage = (event) => {
  return function (dispatch) {
    event.preventDefault();

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    return axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formData,
    })
      .then((res) => {
        dispatch(handleUploadImage(res.data.url));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const createNewListing = (postData) => {
  return function (dispatch) {
    const { brand, condition, price, size, title, userId } = postData
    return fetch('/listing', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },

      body: JSON.stringify({
        brand,
        condition,
        imgurl: imgUrl,
        key: 'uuid_generate_v4()',
        lid: listing.length,
        listdate: new Date(),
        price,
        size,
        title,
        userId,
      }),
    })
      .then((res) => {
        console.log('sending data');
        dispatch(createListing(postData));
      })
      .catch((err) => {
        console.log(err);
      })
  }
};
