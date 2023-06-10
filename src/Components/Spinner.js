import React, { Component } from 'react'
import loader from'./gif4.gif'
export default class Spinner extends Component {
  render() {
    return (
     <>
     <div className="color" style={{backdropFilter: "blur(22px)",position: "absolute",width: "100%" ,height:"100vh",top:"0%",left: "0%",zIndex:"100",display:"flex",alignItems:"center",justifyContent:"center",background:"black"}}>
     <img src={loader} alt="loading"style={{width:"500px",height:"330px"}}
     />
     </div>
     </>  
    )
  }
}