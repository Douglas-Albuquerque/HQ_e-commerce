import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.644);
  min-height: 100vh;
  min-width: 100%;

`

export const Loader = styled.div`
  border: 1rem solid #f3f3f3;
  border-top: 1rem solid #3498db;
  border-radius: 50%;
  width: 4.375rem;
  height: 4.375rem;
  animation: spin 0.8s linear infinite;
`