const Menu = ['inbox', 'done', 'sent', 'setting'] as const;
type Menu = (typeof Menu)[number];

export { Menu };
