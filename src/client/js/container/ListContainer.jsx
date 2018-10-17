import React, { Component } from 'react';
import axios from 'axios';
import Form from '../components/Form.jsx';
import List from '../components/List.jsx';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/paulsg10/image/upload';
const CLOUDINARY_UPLOAD_PRESET = 'savvseld';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false,
      brand: '',
      price: 0,
      size: 0,
      title: '',
      condition: '',
      imgUrl: '',
      listing: [{
        imgUrl: '', id: 1, title: 'Test', price: 10, condition: 'NWT', brand: 'xx', size: 100,
      }],
      categories: [],
      filterBy: '',
    };

    this.togglePopup = this.togglePopup.bind(this);
    this.createNew = this.createNew.bind(this);
    this.updateSelectedBrand = this.updateSelectedBrand.bind(this);
    this.updateSelectedCondition = this.updateSelectedCondition.bind(this);
    this.updateSelectedSize = this.updateSelectedSize.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.getFilters = this.getFilters.bind(this);
    this.filterProduct = this.filterProduct.bind(this);
  }

  componentDidMount() {
    fetch('/listing')
      .then(data => data.json())
      .then((data) => {
        this.setState({
          listing: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    const { filterBy } = this.state;

    if (filterBy === '') {
      fetch('/listing')
        .then(data => data.json())
        .then((data) => {
          this.setState({
            listing: data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  getFilters(event) {
    const filterBy = event.target.value;
    fetch(`/categories/${filterBy.toLowerCase()}`)
      .then(data => data.json())
      .then((categories) => {
        const newState = categories.map(category => category[filterBy]);
        this.setState({ categories: newState, filterBy });
      });
  }

  createNew() {
    const {
      title, price, size, condition, brand, listing, imgUrl,
    } = this.state;

    const newList = listing.slice();
    newList.push({
      imgUrl: '',
      id: `id${newList.length}`,
      title,
      price,
      size,
      condition,
      brand,
    });

    this.setState({
      listing: newList,
    });

    fetch('/listing', {
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
        uid: 2,
      }),
    });

    this.togglePopup();
  }

  togglePopup() {
    const { showPopup } = this.state;
    this.setState({
      showPopup: !showPopup,
    });
    console.log(showPopup);
  }

  // all the updating little functions when you pick brand/size/write title
  updateSelectedBrand(event) {
    this.setState({
      brand: event.target.value,
    });
  }

  updateSelectedSize(event) {
    this.setState({
      size: event.target.value,
    });
  }

  updateSelectedCondition(event) {
    this.setState({
      condition: event.target.value,
    });
  }

  updatePrice(event) {
    this.setState({
      price: event.target.value,
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }

  // updateUrl(event) {
  //   this.setState({
  //     imgUrl:event.target.value
  //   })
  // }

  handleUploadImage(event) {
    event.preventDefault();

    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: formData,
    })
      .then((res) => {
        this.setState({
          imgUrl: res.data.url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  filterProduct(event) {
    const { filterBy } = this.state;
    const filter = event.target.value;

    fetch(`/filterby${filterBy}/${filter}`)
      .then(data => data.json())
      .then((sneakers) => {
        this.setState({ listing: sneakers });
      });
  }
 
  render() {
    const { categories, listing, showPopup } = this.state;
    const {
      getFilters, filterProduct, togglePopup,
    } = this;
    const options = categories.map(category => <option>{category}</option>);

    return (
      <div>
        <div id="banner">
          {/* <img  className="banner-image" src="https://cdn.shopify.com/s/files/1/1434/2870/products/IMG_4567_1024x1024.JPG?v=1533897343" ></img> */}
          <div>
            <h1 className="post-heading">BUY AND SELL SNEAKERS</h1>
          </div>
        </div>
        <div>
          <div>
            <nav className="post-button-containers">
              <div>
                <select className="filter-buttons" onChange={event => getFilters(event)}>
                  <option disabled selected value> Filter </option>
                  <option>brand</option>
                  {/* <option>size</option> */}
                  <option>condition</option>
                  <option>size</option>
                </select>
                <select className="filter-buttons" onChange={event => filterProduct(event)}>
                  <option disabled selected value> Filter By </option>
                  {options}
                </select>
              </div>
              <button className="post-button" onClick={togglePopup}>Post</button>
            </nav>
          </div>
          {showPopup
            ? (
              <Form
                createNew={this.createNew}
                togglePopup={this.togglePopup}
                updateSelectedBrand={this.updateSelectedBrand}
                updateSelectedSize={this.updateSelectedSize}
                updateSelectedCondition={this.updateSelectedCondition}
                updateTitle={this.updateTitle}
                updatePrice={this.updatePrice}
                updateUrl={this.updateUrl}
                handleUploadImage={this.handleUploadImage}
              />
            ) : null
          }
          <div className="lists-containers">
            <List listing={listing} />
            {/* <Form  /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ListContainer;
