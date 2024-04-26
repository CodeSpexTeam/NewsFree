import React, { Component } from 'react'
// import './App.css';


export class NewsItem extends Component {

  render() {
    let { title, describe, imageUrl, newsUrl, publishDate, publishedAuthor, source } = this.props
    return (



      <div className="container">
        <div className="row">
          <div className="col-xl-12 mb-3 d-flex align-items-stretch ">
            <div className="my-3 ">

              <span class="position-absolute top-0 translate-middle badge rounded-pill  bg-danger" style={{ left: '90%', zindex: '1' }}>
                {source}
                <span class="visually-hidden">unread messages</span>
              </span>
              <div className='d-flex align-items-stretch h-50 w-auto'  >
                <img src={imageUrl} className="card-img-top img-fluid  " alt=""  />

              </div>


              <div className="card-body  ">
                <h5 className="card-title">{title}... </h5>
                <p className="card-text">{describe}...</p>
                <p class="card-text"><small class="text-body-secondary">By {publishedAuthor ? publishedAuthor : "unknown"} on {publishDate}</small></p>

                <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>

              </div>
            </div>
          </div>
          </div>
        </div>
      
    )
  }
}

export default NewsItem
