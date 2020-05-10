import React from 'react';
import styled from 'styled-components';

const RatingBox = ({star = null, count}) => (
  <RatingBoxBtn>
    {
      star ? (<Text>{star} stars</Text>) : null
    }
    {/* TODO <ProgressBar /> */}
    <PercentageBar>
      <ProgressBarWrapper>
        <TrackWrapper>
          <Track>
            <Bar></Bar>
          </Track>
        </TrackWrapper>
      </ProgressBarWrapper>
    </PercentageBar>
    <Text>
      <span className="rating-box__count" data-test={count}>{count + ' '} </span>
      Reviews
    </Text>
  </RatingBoxBtn>
);

export default RatingBox;


const RatingBoxBtn = styled.button`
  box-shadow: none;
  cursor: pointer;
  border-width: 0px;
  padding: 0px;
  background: transparent;
  margin-bottom: 0.9375rem;
  margin-left: -0.9375rem;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 2.5rem 0px 0.9375rem;
`;

const Text = styled.span`
  font-size: 1rem;
  line-height: 1.5625rem;
  font-weight: 400;
`;

const Spacer = styled.div(props => ({
  'padding-top': props.tm || '0px',
  'padding-right': props.rm || '0px',
  'padding-bottom': props.bm || '0px',
  'padding-left': `${props.lm}rem` || '0px',
}));

const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const TrackWrapper = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const Track = styled.div`
  width: 100%;
  height: 1.25rem;
  background-color: rgb(224, 224, 224);
  border-radius: 0.99rem;
  overflow: hidden;
  margin: 0.75rem;
`;

const Bar = styled.div`
  height: 100%;
  width: 80%;
  background-color: rgb(255, 207, 0);
`;

const PercentageBar = styled.div`
  width: 12rem;
`;