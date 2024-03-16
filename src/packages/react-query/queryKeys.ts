const QueryKeys = {
  Mail: {
    all: ['mail'] as const,
    lists: () => [...QueryKeys.Mail.all, 'list'] as const,
    list: (filters?: string) =>
      [...QueryKeys.Mail.lists(), { filters }] as const,
    item: (id: number) => [...QueryKeys.Mail.lists(), id] as const,
  },
};

export { QueryKeys };
