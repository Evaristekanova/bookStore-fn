import styled from "styled-components";

export const TableContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  width: 80vw;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 0.9em;

  th {
    background-color: #00aeb5;
    color: white;
    padding: 5px;
    border: 1px solid #ddd;
    text-align: left;
  }

  td {
    background-color: hsl(240, 50%, 90%);
    padding: 5px 8px;
    border: 1px solid #ddd;
    text-align: left;
  }

  tr:nth-child(even) td {
    background-color: hsl(240, 50%, 85%);
  }

  tr:hover td {
    background-color: #ddd;
  }
`;
