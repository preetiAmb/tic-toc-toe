import styled from 'styled-components';

type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps> `
  flex-direction: row;
  gap: ${(props) => props.gap}px;
  display: flex;
`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;
