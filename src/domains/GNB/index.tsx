import { Button, List } from '@/packages/design-packages/components';
import { styled } from '../../../styled-system/jsx';

const GNB = () => {
  return (
    <StyledContainer>
      <div>Profile</div>
      <StyledList>
        <List.Item>
          <Button>Inbox</Button>
        </List.Item>
        <List.Item>
          <Button>Done</Button>
        </List.Item>
        <List.Item>
          <Button>Draft</Button>
        </List.Item>
        <List.Item>
          <Button>Sent</Button>
        </List.Item>
      </StyledList>
    </StyledContainer>
  );
};

const StyledList = styled(List, {
  base: {
    gap: '10px',
  },
});

const StyledContainer = styled('nav', {
  base: {
    width: 'gnb',
    height: '100vh',
    backgroundColor: 'black004',
  },
});

export default GNB;
