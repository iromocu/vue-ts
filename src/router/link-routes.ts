export interface RouteLink {
    name: string;
    path: string;
    title: string;
}

export const routeLink: RouteLink[] = [
    { path: '/', name: 'home', title: 'Inicio'},
    { path: '/about', name: 'about', title: 'Nosotros'},
    { path: '/characters', name: 'characters', title: 'Personajes'}
]