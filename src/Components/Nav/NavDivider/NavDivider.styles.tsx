import styled from 'styled-components';

const Divider = styled.div`
  flex: none;
  margin: auto;
  width: calc(100% - 16px);
  height: 2px;
  border-radius: 1px;
  background-color: #a3a3a3;
`;

const DividerContainer = styled.div`
  display: flex;
  width: 40px;
  padding: 8px 0px;
`;

export { Divider, DividerContainer };
