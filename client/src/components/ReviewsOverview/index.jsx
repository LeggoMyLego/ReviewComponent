import React, { Component } from 'react';
import styled from 'styled-components';

import Services from '../../services';
import ReviewsList from '../ReviewsList';
import ReviewsOverall from '../ReviewsOverall';
import Pagination from '../Pagination';
import { Button } from '../../shared/StyledComponents';

class ReviewsOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allReviews: [],
      reviews: []
    };
  }

  componentDidMount() {
    this.getReviews(1);
  }

  async getReviews(productId, filters = null) {
    await Services.getReviews(productId, filters)
      .then(res => {
        this.setState({
          reviews: res.reviews.slice(0, 5),
          allReviews: res.reviews,
          productId: res.productId
        });
      })
      .catch(err => {
        console.error('failed to fetch', err);
      });
  }

  handlePage(currentPage) {
    const { allReviews } = this.state;
    console.log(currentPage);
    this.setState({
      reviews: allReviews.slice((currentPage - 1) * 5, (currentPage * 5))
    })
  }

  render() {
    const { reviews, allReviews, productId } = this.state;
    return (
      <OverviewContainer>
        {reviews.length ? (
          <>
            <ReviewsOverall reviews={reviews} allReviews={allReviews} />
            <ReviewsList reviews={reviews} productId={productId} getReviews={this.getReviews.bind(this)} />
            <Pagination handlePage={this.handlePage.bind(this)} />
          </>
        ) : (
          <>
            <span> Be the first to</span>
            <Button>Write a review</Button>
          </>
        )}
      </OverviewContainer>
    );
  }
}

export default ReviewsOverview;


const OverviewContainer = styled.div`
  width: 100%;
  max-width: 82.5rem;
  padding: 0px 0.75rem;
  margin: 0px auto;
  height: 100%;
  min-height: 100%;
  line-height: 1.5;
  text-size-adjust: 100%;
  color: rgb(44, 44, 44);
  background: rgb(255, 255, 255);
  font-family: "Cera Pro", sans-serif;
`;

