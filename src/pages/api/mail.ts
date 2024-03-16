// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MailData } from '@/types/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    list: MailData[];
  }>
) {
  if (req.method === 'GET') {
    res.status(200).json({
      list: [
        {
          id: '1',
          title:
            '[Korean FE Article] "깜빡이는" UI를 거부하세요. useLayoutEffect, 페인팅 그리고 브라우저 이야기',
          content: '',
        },
        {
          id: '2',
          title: 'Build-time macros for everyone',
          content: '',
        },
        {
          id: '3',
          title: 'Browsers buddy up to bring the speed',
          content: '',
        },
        {
          id: '4',
          title: 'Node 21.7 and TypeScript 5.4',
          content: '',
        },
        {
          id: '5',
          title: '[naver/fe-news] 누락된 링크 추가 (PR #56)',
          content: '',
        },
      ],
    });
  } else {
    //
  }
}
