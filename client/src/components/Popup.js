import React from 'react';
import './Popup.css';

class Popup extends React.Component{
  render(){
    return(
      <div className="popup" style={{zIndex:"2"}}>
        <div className="popup_inner">
          <h1>
            {this.props.title}
            <button onClick={this.props.close} className="btn btn-dark" style={{float:"right"}}>X</button>
          </h1>
          {this.props.text}
        </div>
      </div>
    );
  }
}

export default Popup
