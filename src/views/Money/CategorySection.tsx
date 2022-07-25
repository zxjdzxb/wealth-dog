import styled from 'styled-components';

const CategorySection = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#a3c4f3;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#fec5bb;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

export {CategorySection}