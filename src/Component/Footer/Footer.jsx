import React, { Fragment } from "react";
import './Footer.css';

class Footer extends React.Component{
    render(){
        return(
            <Fragment>
            <footer>
           <div className="footer">
            <p>Author: Hege Refsnes<br/>
            <a href="mailto:hege@example.com">rabblesoft@gmail.com</a></p>
           </div>
          </footer>
            </Fragment>
        )
    }
}

export default Footer;