import styled from 'styled-components';
type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps> `
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
  padding-left: 8rem;
`;
