import * as types from '../constants/actionTypes';

export const togglePopup = (postId) => ({
  type: types.TOGGLE_POPUP,
  payload: postId,
})

export const createListing = () => ({
  type: types.CREATE_LISTING,
})

export const updateSelectedBrand = (event) => ({
  type: types.UPDATE_SELECTED_BRAND,
  payload: event,
})

export const updateSelectedCondition = (event) => ({
  type: types.UPDATE_SELECTED_CONDITION,
  payload: event,
})

export const updateSelectedSize = (event) => ({
  type: types.UPDATE_SELECTED_SIZE,
  payload: event,
})

export const updatePrice = (event) => ({
  type: types.UPDATE_PRICE,
  payload: event,
})

export const updateTitle = (event) => ({
  type: types.UPDATE_TITLE,
  payload: event,
})

export const handleUploadImage = (event) => ({
  type: types.HANDLE_UPLOAD_IMAGE,
  payload: event,
})

export const getFilters = () => ({
  type: types.GET_FILTERS,
  payload: ,
})

export const filterProducts = () => ({
  type: types.FILTER_PRODUCTS,
  payload: ,
})
