import { down } from 'styled-breakpoints';
import styled from 'styled-components';

const MatchChampionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 40px);
  gap: 4px;
  max-height: 68px;

  ${down('sm')} {
    width: 100%;

    grid-template-columns: repeat(5, 40px);
    grid-template-rows: repeat(2, 68px);

    /* 100% of container (flex for mobile) - 200px (20px wide squares * 5 per row) / 4 (4 grid gaps between 5 elements per row) */
    gap: 8px calc((100% - 200px) / 4);

    max-height: 144px;
  }
`;

export { MatchChampionsContainer };
