import StarRatings from 'react-star-ratings';
import React, {Component} from 'react';

 
class Stars extends Component {
  state = {rating:1}  
  changeRating = newRating => {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
        />
      );
    }
}

export default Stars