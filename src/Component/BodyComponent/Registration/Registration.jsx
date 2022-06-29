import React, { Fragment } from "react";
import "./Registration.css";

class Registration extends React.Component{

constructor(props){
  super(props);

  this.state = {
        name:'',
        email:'',
        password:'',
        data:[]

};


}

changeHandler=(e)=>{
  this.setState({[e.target.name]:e.target.value});
}


submitForm=(e)=>{
  e.preventDefault();
  
  console.log(this.state);

  
}

    render(){


        return(
            <Fragment>

           <section className="registration">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                      <div className="card text-black">
                        <div className="card-body p-md-5">
                          <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
              
                              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              
                              <form className="mx-1 mx-md-4" onSubmit={this.submitForm}>
              
                                <div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                  <label className="form-label"><b>Your Name</b></label>
                                    <input type="text" id="form3Example1c" name="name" value={this.state.name} onChange={this.changeHandler} className="form-control" />
                                    
                                  </div>
                                </div>
              
                                <div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                  <label className="form-label"><b>Your Email</b></label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.changeHandler} id="form3Example3c" className="form-control" />
                                    
                                  </div>
                                </div>
              
                                <div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                  <label className="form-label"><b>Password</b></label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} id="form3Example4c" className="form-control" />
                                  </div>
                                </div>
              
                                {/*<div className="d-flex flex-row align-items-center mb-4">
                                  <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                  <div className="form-outline flex-fill mb-0">
                                  <label className="form-label">Repeat your password</label>
                                    <input type="password" id="form3Example4cd" className="form-control" />
                                   
                                  </div>
                                </div>*/}
              
                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                  <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                </div>
              
                              </form>
              
                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                className="img-fluid" alt="Sample" />
              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            
            
            </Fragment>
        )
    }
}


export default Registration;