import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
export class News extends Component {

    articles=[];

    constructor(){
        super();
        console.log('constractor');
        this.state={
           articles: this.articles,
           loading:false,
           page:1
        }
    }

    async componentDidMount(){
        console.log('cdm');
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0fd2727949ec4bd99e7303db4efc72e5&page=1&pageSize=${this.props.pSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState( {articles :parseData.articles ,totalResults: parseData.totalResults,loading:false});
    }

    priviousClick=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0fd2727949ec4bd99e7303db4efc72e5&page=${this.state.page-1}&pageSize=${this.props.pSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            page:this.state.page-1,
            articles :parseData.articles,
            loading:false
        })
    }

    nextClick= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=0fd2727949ec4bd99e7303db4efc72e5&page=${this.state.page+1}&pageSize=${this.props.pSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parseData=await data.json();
        console.log(parseData);
        this.setState({
            page:this.state.page+1,
            articles :parseData.articles,
            loading:false
        })
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>Todays top headline.....</h1>
        {this.state.loading && <Loading/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((e)=>{
                return(
                <div className="col-md-4" key={e.url}>
                <NewsItem title={e.title?e.title.slice(0,50):""} description={e.description?e.description.slice(0,90):""} imageUrl={e.urlToImage} newsUrl={e.url}/>
                </div>
                )
            })}
            
        </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.priviousClick}>Privious</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pSize)} type="button" className="btn btn-dark" onClick={this.nextClick}>Next</button>
            </div>
      </div>
    )
  }
}

export default News