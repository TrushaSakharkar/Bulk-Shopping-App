import React,{Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Homecustomer extends Component {

  constructor(props) {
    super(props);

    this.state={
      name:'',
      sort:''
    }

    this.onClick = this.onClick.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangesort = this.onChangesort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


  }
  onChangename(event) {
    this.setState({ name: event.target.value });
    console.log({ name:event.target.value});
}
onChangesort(event) {
  this.setState({ sort: event.target.value });
  console.log({ name:event.target.value});
  localStorage.setItem("sort",event.target.value);
}

onSubmit(e) {
  e.preventDefault();

  const newUser = {
    name: this.state.name,
    sort: this.state.sort,
  }
  axios.post('http://localhost:4000/searchproduct1', newUser)
  .then(function(res){
     // console.log(res.data)
     });
     window.location='/searchproduct';

}

  onClick(e) {
    e.preventDefault();
   
       window.location='/';
  }
  render(){
      return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">customer</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
        <a class="navbar-brand" href="/showproduct">Show Products</a>
           
            {/* <Link to='/showproduct' className="nav-link">show products</Link> */}
            </li>
            <li class="nav-item">
        <a class="navbar-brand" href="/myorder">My Orders</a>

            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href='/searchproduct' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                sort by
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
         
          <form class="form-inline my-2 my-lg-0">
          <input type="text" 
                   id="quantity" 
                   name="quantity" 
                   placeholder="sort by" 
                   class="input-xlarge"
                   value={this.state.sort}
                   onChange={this.onChangesort}
                   />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onSubmit}>Search</button>
           
            <input type="text" 
                   id="quantity" 
                   name="quantity" 
                   placeholder="" 
                   class="input-xlarge"
                   value={this.state.name}
                   onChange={this.onChangename}
                   />
          </form>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onClick}>
                 Log Out
                </button>
         
        </div>
      </nav>
    )
    }
}