interface IHero {
  id: number;
  name: string;
  isTopHero: boolean;
}

const heros: IHero[] = [
  { id: 1, name: 'Tom Cruise', isTopHero: true },
  { id: 2, name: 'Angelina Jolie', isTopHero: false },
  { id: 3, name: 'Dwayne Johnson', isTopHero: false },
  { id: 4, name: 'Scarlett Johansson', isTopHero: false },
  { id: 5, name: 'Robert Downey Jr.', isTopHero: true },
  { id: 6, name: 'Leonardo DiCaprio', isTopHero: false },
  { id: 7, name: 'Jennifer Lawrence', isTopHero: false },
  { id: 8, name: 'Brad Pitt', isTopHero: true },
  { id: 9, name: 'Emma Stone', isTopHero: false },
  { id: 10, name: 'Chris Hemsworth', isTopHero: true },
];

export { heros, IHero };
