import styled from 'styled-components';

const Wrapper = styled.section`
  display:flex;
  flex-direction: column;
  > .output{
    background:#f8edeb;
    font-size: 36px;
    font-style: italic;
    line-height: 72px;
    text-align:right;
    padding: 0 16px;
    box-shadow: inset 0 -2px 2px -2px rgba(0,0,0,0.25);
  }
  > .pad{ 
    > button{
      font-size: 18px; float: left; width: 25%; height: 64px; border: none;
      &.ok{ height: 128px; float: right; }
      &.zero{ width: 50%; }
      &:nth-child(1){
        background:#caf0f8;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: #ade8f4;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background:#90e0ef;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background:#48cae4;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background:#00b4d8;
      }
      &:nth-child(12) {
        background:#0077b6;
      }
      &:nth-child(14) {
        background:#0096c7;
      }
    }
    
  }
`;

export {Wrapper};