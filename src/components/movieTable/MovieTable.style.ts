import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  border: 0.25rem solid #000;
  border-collapse: collapse;
`;

export const Caption = styled.caption`
  margin: 0.5rem;
`;

export const THead = styled.thead``;
export const TBody = styled.tbody``;

export const Tr = styled.tr`
  :nth-child(even) {
    background: #f4f4f4;
  }
  `;

export const Th = styled.th`
  text-align: center;
  background: #000;
  color: #fff;
  font-weight: bold;
  line-height: 2;
  `;

export const Td = styled.td`
padding: 0.25rem;
  text-align: center;

`;

export const Button = styled.button`
  font-size: 1rem;
  min-height: 2.5rem;
  min-width: 4.5rem;
  background: #000;
  color: #fff;
  border: 0.25rem solid #ffff00;
  border-radius: 0.5rem;
  transition: all 0.5s;
  cursor: pointer;
  
  :hover {
    color: #000;
    background: #fff;
    opacity: 1;
  }
`;
