import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const MatchChampionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 4px;

  ${down('sm')} {
    width: 100%;

    grid-template-columns: repeat(5, 40px);
    grid-template-rows: repeat(2, 68px);

    /* 100% of container (flex for mobile) - 240px (24px wide badges * 10 per row) / 9 (9 grid gaps between 10 elements) */
    gap: 8px calc((100% - 200px) / 4);
  }
`;

export { MatchChampionsContainer };
