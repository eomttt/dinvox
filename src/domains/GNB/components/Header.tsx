import { Flex } from '@/packages/design-packages/components/layout/Flex';
import { styled } from '../../../../styled-system/jsx';
import { Button } from '@/packages/design-packages/components';
import { AngleDoubleSmallLeftIcon } from '@/packages/design-packages/icons/AngleDoubleSmallLeftIcon';
import { css } from '../../../../styled-system/css';

interface Props {
  onClickHide: () => void;
}

const GNB_HEADER_HEIGHT = 40;

const Header = ({ onClickHide }: Props) => {
  return (
    <StyledContainer align="center" justify="between">
      <div>Profile</div>
      <Button
        className={css({
          width: 30,
          height: 30,
          borderRadius: '4px',
        })}
        onClick={onClickHide}
      >
        <AngleDoubleSmallLeftIcon />
      </Button>
    </StyledContainer>
  );
};

const StyledContainer = styled(Flex, {
  base: {
    height: GNB_HEADER_HEIGHT,
    px: 10,
  },
});

export { Header };
