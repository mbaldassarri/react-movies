import React from "react";
import Moment from "react-moment";
import { Rating } from 'semantic-ui-react'

class Cards extends React.Component {
  render() {
    const POSTER_BASE_URL = "http://image.tmdb.org/t/p/w780/";
    return (
      <div className="ui three column grid">
        {this.props.data.map((item, index) => (
          <div className="column" key={index}>
            <div className="ui fluid red card">
                <div className="image">
                  <img src={POSTER_BASE_URL + item.poster_path} alt="Poster" />
                </div>
                <div className="content">
                  <div className="header">{item.title}</div>
                  <br />
                  <div className="meta">
                    <span className="date" style={{ paddingTop: "0.2em" }}>
                      Data Uscita: <span />
                      <Moment format="DD MMMM" locale="it">
                         {item.release_date} 
                      </Moment>
                    </span>
                  </div>
                  <div className="description">{item.overview}</div>
                </div>
                <MyRating rating={item.vote_average}/>
              </div>
            </div> 
        ))}
      </div>
    );
  }
}

const MyRating = props => {
  const rating = props.rating / 2;
  return (
    <div className="extra content">
      Rating: {props.rating}
      <div className="extra" style={{ paddingTop: "0.5em" }}>
          <Rating icon='star' defaultRating={rating} maxRating={5} />
      </div>
    </div>
  )
}
export default Cards;
