import React, { Component } from 'react';

import './main.css';
import axios from 'axios'
import Fetchdata from "./range.js"

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: {}
    };
  }

  componentDidMount() {
    // make an Axios GET request to retrieve JSON data
    axios.get('https://restframework.pythonanywhere.com/house/1/')
      .then(response => {
        // handle the response and update the component state
        // alert(response.data)
        const jsonData = response.data;
        this.setState({ jsonData });
      })
      .catch(error => {
        console.log(error);
      });
    }
      render() {
        // access the specific data you want to display from the component state
        const { bhk,price,gender,ty_of_prop,age_of_prop,furn_status,location,sf} = this.state.jsonData;
    





    return (
      <div className='main'>
        <div className='filters'>
          <div id="appliedfilters">
            <h2 >applied filters</h2>
            <a href="">clear all</a>
          </div>




          <br />

          <hr />
          <div className='price'>
            <h4>price</h4>
        

            <div>
             
              <label for="price">0</label>
              <Fetchdata/>
            </div>

          </div>
          <br />

          <hr />
          <div className='sq.feet'>
            <h4>sq.feet</h4>
            <p>0</p>
            <Fetchdata/>

          </div>
          <br />

          <hr />
          <div>
            <h4>furnishing status</h4>
            <input type='checkbox' />fully furnished<br />
            <input type='checkbox' />not furnished<br />
            <input type='checkbox' />half<br />

          </div>
          <br />

          <hr />


          <h3>age of property</h3>
          <input type='checkbox' />1-5years<br />
          <input type='checkbox' />5-10yrs<br />
          <input type='checkbox' />10+yrs<br />
          <br />

          <hr />
          <h3>no.of bedrooms</h3>
          <input type='checkbox' />1BHK<br />
          <input type='checkbox' />2BHK<br />
          <input type='checkbox' />3BHK<br />
          <br />

          <hr />
          <h3>types of property</h3>
          <input type='checkbox' />Appartment<br />
          <input type='checkbox' />villa<br />
          <input type='checkbox' />house<br />
          <br />

          <hr />
          <h3>available for</h3>
          <input type='checkbox' />men<br />
          <input type='checkbox' />women<br />
          <input type='checkbox' />married<br />

        </div>
        <div className='properties'>
          <picture >
            <img src="https://th.bing.com/th?id=OIP.fFF3Uo8Gp2ROms2DO3nbxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="100%" height="100%"></img>

          </picture>
          <table>
            <tr>
              <td colSpan="3"><h5 ><a href=""> {bhk} BHK flat for rent near karumathampatti</a></h5></td>

            </tr>
           
            <tr>
              <td>
              {price}
                <span>/month</span>
                <div id="info">deposit $200</div>
              </td>
              <td>{sf}/sqFeet
                {/* <span>150 sq.meter</span> */}
                <div id="info">build up area</div>
              </td>
              <td>
              
                <span>3</span>
                <div id="info">baths</div>
              </td>
            </tr>

            <tr ><td colSpan="3" id="info">{location}</td></tr>
            <tr><td>
              <button type="button" class="btn btn-dark">Contact</button></td></tr>
              
          </table>

        </div>

      </div>
    )
    }
  }
  export default MyComponent;