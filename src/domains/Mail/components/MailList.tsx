import { getMails } from '@/packages/api/mail';
import { List } from '@/packages/design-packages/components';
import { QueryKeys } from '@/packages/react-query/queryKeys';
import { MailData } from '@/types/mail';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ComponentPropsWithoutRef } from 'react';

const MailList = ({ ...props }: ComponentPropsWithoutRef<typeof List>) => {
  const { data: mailList } = useSuspenseQuery<{ list: MailData[] }>({
    queryKey: QueryKeys.Mail.lists(),
    queryFn: getMails,
  });

  return (
    <List {...props}>
      {[...mailList.list].map(mailData => {
        return (
          <List.Item key={mailData.id} divider>
            {mailData.title}
          </List.Item>
        );
      })}
    </List>
  );
};

export { MailList };
