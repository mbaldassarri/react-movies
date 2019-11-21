import React from "react";
import MovieCard from "./MovieCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
    this.fetchMovies()
  }
 
  componentDidMount() {
    //Refresh every hour
    this.timedFetch = setInterval(() => {
      this.fetchMovies()
    },1000 * 60 * 60)
  }

  componentWillUnmount() {
    clearInterval(this.timedFetch)
  }

  fetchMovies = () => {
    const URL = "https://api.themoviedb.org/3/movie/upcoming?sort_by=release_date.desc&api_key=your_api_key_here&language=it-IT&page=1"

    fetch(URL)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.results
        });
      });
  }

  render() {
    return (
      <div className="ui container" style={{ padding: "3em" }}>
        <MovieCard data={this.state.data}/>
      </div>
    );
  }
}

export default App;
