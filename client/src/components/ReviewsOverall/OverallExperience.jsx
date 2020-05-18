import React from 'react';
import Ratings from '../../shared/Ratings';
import styled from 'styled-components';
import { MARKERS } from '../../constants';
import { Spacer } from '../../shared/StyledComponents';

const OverallExperience = ({experiences}) => (
  <OverallExperienceContainer>
    <OverallTitle>
      Overall Experience
    </OverallTitle>
    <div>
      <Title>
        Play Experience
      </Title>
      <Ratings rating={experiences.playExperience} marker={MARKERS.LEGO}/>
    </div>
    <Spacer bm={1} />
    <div>
      <span className="overall-experience__label">
        Level of Difficulty
      </span>
      <Ratings rating={experiences.difficulty} marker={MARKERS.LEGO}/>
    </div>
    <Spacer bm={1} />
    <div>
      <span className="overall-experience__label">
        Value for Money
        <Ratings rating={experiences.value} marker={MARKERS.LEGO}/>
      </span>
    </div>
  </OverallExperienceContainer>
);

export default OverallExperience;


const OverallExperienceContainer = styled.div`
  padding: 1.25rem 0px 1rem 1.25rem;
  border-left: 1px solid rgb(224, 224, 224);
`;

const Title = styled.h2` 
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
`;

const OverallTitle = styled.h3` 
  font-size: 1rem;
  line-height: 1.5625rem;
  font-weight: 400;
`;