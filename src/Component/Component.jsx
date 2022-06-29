import React, { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import LoginForm from "./BodyComponent/Login/LoginForm";
import Registration from "./BodyComponent/Registration/Registration";
import { Route,Routes} from "react-router-dom";


class Component extends React.Component{
    render(){
        return(
            <Fragment>
                <Header/>

                <Routes>
                    <Route exact path="/" element={<LoginForm/>} />
                    <Route exact path="/registration" element={<Registration/>}/> 
                </Routes>

                <Footer/>

            </Fragment>
        )
    }
}

export default Component;