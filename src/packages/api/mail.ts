import { Api } from './Api';

const Mail = {
  lists: 'api/mail',
};

const getMails = async () => {
  const res = await Api.Get(Mail.lists);
  return res.data;
};

export { getMails };
