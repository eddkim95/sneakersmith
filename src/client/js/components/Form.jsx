import React, { Component } from 'react';

class Form extends Component {
  // where should these functions go

  render() {
    const { brand, condition, price, size, title, userId, imgUrl, createNewListing } = this.props;
    return (
      <div className="formBackground">
        <div id="formContainer">
          <form className="uglyForm" onSubmit={this.handleSubmit}>

            <div>

              <input className="formInput" id="formTitle" type="text" placeholder="Title" onChange={(event) => { this.props.updateTitle(event); }} />
              <br />
              <input className="formInput" id="formPrice" type="text" placeholder="Price" onChange={(event) => { this.props.updatePrice(event); }} />
              <br />


              <select className="formInput" id="selectBrand" onChange={(event) => { this.props.updateSelectedBrand(event); }}>
                <option defaultValue="test"> -- Brand -- </option>
                <option value="Nike">Nike</option>
                <option value="adidas">adidas</option>
                <option value="Jordan:">Jordan</option>
                <option value="Converse">Converse</option>

              </select>
              <br />

              <select className="formInput" id="selectSize" onChange={(event) => { this.props.updateSelectedSize(event); }}>
                <option defaultValue="test"> -- Size -- </option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
                <option value="10.5">10.5</option>
                <option value="11">11</option>
                <option value="11.5">11.5</option>
                <option value="12">12</option>
              </select>
              <br />

              <select className="formInput" id="selectCondition" onChange={(event) => { this.props.updateSelectedCondition(event); }}>
                <option defaultValue="test"> -- Conditions -- </option>
                <option value="Mint Deadstock">Mint Deadstock</option>
                <option value="Deadstock">Deadstock</option>
                <option value="Near Deadstock">Near Deadstock</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
              </select>
              <br />

            </div>
            <input className="formInput" id="imageInput" type="file" name="image" onChange={this.props.handleUploadImage} />
            <br />
            <button className="formInput" id="submitInput" type="button" onClick={() => createNewListing({ brand, condition, price, size, title, userId, imgUrl })}>Submit</button>
            <button className="formInput" id="closeInput" onClick={this.props.toggleForm}>Close</button>
          </form>

          <div>
            <form>
              {/* <input type='file' name="image" onChange={this.props.handleUploadImage}/><br/>
              <input type="submit" value="Upload" /> */}
              {/* <button onClick={} >Upload</button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Form;
