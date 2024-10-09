import { useSuspenseQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getMails } from 'packages/api/mail';
import { List } from 'packages/design-packages/components';
import { Flex } from 'packages/design-packages/components/layout/Flex';
import { Typography } from 'packages/design-packages/components/typography/Typography';
import { QueryKeys } from 'packages/react-query/queryKeys';
import { ComponentPropsWithoutRef } from 'react';
import { MailData } from 'types/mail';
import { css } from '../../../../styled-system/css';
import { styled } from '../../../../styled-system/jsx';

const Inbox = ({ ...props }: ComponentPropsWithoutRef<typeof List>) => {
  const { data: mailList } = useSuspenseQuery<{ list: MailData[] }>({
    queryKey: QueryKeys.Mail.lists(),
    queryFn: getMails,
  });

  return (
    <List {...props}>
      {[...mailList.list].map(mailData => {
        return (
          <List.Item
            key={mailData.id}
            divider
            css={{
              height: 60,
            }}
          >
            <StyledLink href={`/inbox/${mailData.id}`}>
              <Flex
                align="center"
                className={css({
                  height: '100%',
                })}
              >
                <Typography>{mailData.title}</Typography>
              </Flex>
            </StyledLink>
          </List.Item>
        );
      })}
    </List>
  );
};

const StyledLink = styled(Link, {
  base: {
    px: 40,

    width: '100%',
    height: '100%',

    textDecoration: 'none',
    clickable: 'weak',
  },
  variants: {
    active: {
      true: {
        backgroundColor: 'black004',
      },
    },
  },
});

export { Inbox };
