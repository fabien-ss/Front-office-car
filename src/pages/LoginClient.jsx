import React, { useState } from 'react';
import '../assets/css/style.css';import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../fonction/fonction';
import { sendDataToApi } from '../fonction/fonction';

function LoginClient() {

    const [state, setState] = useState({
      email: "",
      password: ""
    })

    const handleChange = (event) => {
      console.log(event);
      const data = event.target.value;
      setState({
        ...state,
         [event.target.name]: data
      })  
    }

   // const sendData = () => {
     // console.log("data ", state);
    //}

    async function log() {
      console.log("Manomboka ")
      try {
        var data = await sendDataToApi("http://192.168.20.162:8080/authentification/login", state, "POST");
        console.log(data);
      } catch (error) {
        alert(error.message);
      }
    }
    return(
        <main>
        <div class="container">
    
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
     
                  <div class="card mb-3">
    
                    <div class="card-body">
    
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p class="text-center small">Enter your email & password to login</p>
                      </div>
    
                      <form class="row g-3 needs-validation" novalidate action='front-office'>
    
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">Email</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="email" name="email" onChange={e => handleChange(e)} class="form-control" id="yourUsername" required/>
                            <div class="invalid-feedback">Please enter your email.</div>
                          </div>
                        </div>
    
                        <div class="col-12">
                          <label for="yourPassword" class="form-label">Password</label>
                          <input type="password" name="password" onChange={e => handleChange(e)} class="form-control" id="yourPassword" required/>
                          <div class="invalid-feedback">Please enter your password!</div>
                        </div>
    
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="button" onClick={ e => log() }>Login</button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">Don't have account? <a href='register-client' > Create an account here </a></p>
                        </div>
                      </form>
    
                    </div>
                  </div>
    
                </div>
              </div>
            </div>
    
          </section>
    
        </div>
      </main>
    );
}

export default LoginClient;