import React from 'react';


class Tabbar extends React.Component {

  render() {
    return (
      <div style={{
        width:"100%",
        textAlign:"center",
        lineHeight:"49px"
      }}>
        <div> <img style={{ width:"20px",height:"20px" }} src={ this.props.item.img } /> </div>
      </div>
    );
  }
}


export default Tabbar;
