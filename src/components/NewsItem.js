import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, describe, imageUrl , newsUrl,publishDate, publishedAuthor,source} = this.props
    return (
      <div className="my-3">
        <div className="card mx-3">
        <span class="position-absolute top-0 translate-middle badge rounded-pill  bg-danger" style={{left:'90%',zindex:'1'}}>
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
          <img src={imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{describe}...</p>
            <p class="card-text"><small class="text-body-secondary">By {publishedAuthor?publishedAuthor:"unknown"} on {publishDate}</small></p>
           
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
           
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
