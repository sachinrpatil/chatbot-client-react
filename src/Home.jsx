import React from "react";
import {
    Link
  } from "react-router-dom";

  
export default class Home extends React.Component {
    render() {
        return(
            <div>
                HOME......

                <button>
                    <Link to="/chat">START CHAT</Link>
                </button>
            </div>
        );
    }
}