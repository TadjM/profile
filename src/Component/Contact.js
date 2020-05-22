import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className='contact'>

            <h> LET'S GET IN TOUCH </h> 
            <br />
            <br />    
            <a href="mailto:mtadjdine@yahoo.com"> Email me anytime </a><br />
            <p>I'm lso available on Social media: </p>
            <br />
            
              <a href="https://twitter.com/home" class="fa fa-twitter"></a>
              <a href="https://github.com/TadjM" class="fa fa-github"></a>
              <a href="https://www.linkedin.com/in/tadj/" class="fa fa-linkedin"></a>
          
            </div>
        );
    }
}

export default Contact;