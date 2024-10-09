const Menu = ['inbox', 'setting'] as const;
type Menu = (typeof Menu)[number];

export { Menu };
