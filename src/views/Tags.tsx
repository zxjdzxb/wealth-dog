import Layout from '../components/Layout';
import React  from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    //#e5e5e7
    background:#caf0f8;
    border-bottom: 1px solid #ade8f4;
    line-height: 20px;
    margin-left: 0;
    > a{
      padding: 12px 16px 12px 0;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    
  }
`;
const Button = styled.button`
  font-size: 18px; border: none; padding: 8px 10px;
  background: #00b4d8; border-radius: 4px;
  color: white;
`;
const Center = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`

function Tags() {
  const {tags, } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.id}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;