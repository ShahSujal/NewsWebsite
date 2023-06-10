import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source} = this.props;
    return (
        <div className="my-3 mx-4">
          <div className="card bg-dark position-relative" style={{position:"relative",width: "18rem",color:"gray"}}>
            <img src={!imageUrl?"https://images.unsplash.com/photo-1644633629025-80a0303865c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80":imageUrl} className="card-img-top" alt="..." style={{borderRadius:"12px"}}/>
            <div className="card-body">
            <span className="position-relative translate-middle badge my-2" style={{top:"0%",left:"50%" ,color:"rgb(255, 255 255)" , zIndex:10, background:"rgba(0, 0, 0, 0)",width:"100%",backdropFilter:"blur(60px)",fontSize:"16px"}}>
  From :  {source}
  </span>
              <h5 className="card-title my-1" style={{color:"#ADADB1"}}>{title}</h5>
              {/* <p className="card-text" style={{color:"#89898C"}}>{description}...</p> */}
              <p className="card-text"><small className="text-muted">By  {!author?"unkown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-outline-primary" rel="noreferrer">Read more..</a>
            </div>
          </div>
        </div>
    )
  }
}
export default NewsItem;
