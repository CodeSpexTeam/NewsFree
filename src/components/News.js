import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country:'in',
    pageSize:8,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    page:PropTypes.number
    

  }

  constructor(){
    super();
   this.state = {
      articles: [],
      loading:false,
      page:1,
    }
  }

  


  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed425507786941a58536c11741274e9b&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      loading:false
    })
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
   }


   async updatePage(){
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed425507786941a58536c11741274e9b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading:true
      })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading:false
      })
        
    }

   }
  handlePrevious =async () =>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed425507786941a58536c11741274e9b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  //   this.setState({
  //     loading:true
  //   })
  //  let data = await fetch(url);
  //  let parsedData = await data.json();
  //  this.setState({
  //   loading:false
  // })
   
  //   this.setState({
  //     page: this.state.page-1,
  //     articles: parsedData.articles
      
  //   })

  this.setState({page:this.state.page-1});
  this.updatePage();


  }

   handleNext = async () =>{

    // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed425507786941a58536c11741274e9b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   this.setState({
    //     loading:true
    //   })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     loading:false
    //   })
    //     this.setState({
    //       page: this.state.page+1,
    //       articles: parsedData.articles
  
    //     })
    // }

    this.setState({page:this.state.page+1});
    this.updatePage();
    

  }




  render() {
    console.log("render");
   
    return (
      <div>
        <div className="container my-3">
          <h1 className="my-3 text-center">News - Top News Headline</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
          { !this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0,45):""} describe={element.description?element.description.slice(0, 88):""} 
              imageUrl={element.urlToImage?element.urlToImage:"https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRsaW5lc3xlbnwwfHwwfHx8MA%3D%3D"} 
              newsUrl={element.url} publishDate={new Date(element.publishedAt).toGMTString()} publishedAuthor={element.author} source = {element.source.name}/>
            </div>
          })}
            
          </div>
        </div>
        <div className="container py-4 d-flex justify-content-between">
          <button disabled = {this.state.page<=1} type="button" className="btn  btn-dark" onClick={this.handlePrevious}>&larr; Previous</button>
          <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="mx-3 btn btn-dark" onClick={this.handleNext}>Next &rarr; </button>
        </div>
        
      </div>
    )
  }
}

export default News
