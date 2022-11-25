import type { RouteRecordRaw } from 'vue-router'
import CharacterLayout from '@/characters/layout/CharacterLayout.vue'
import CharacterDetail from '@/characters/pages/CharacterDetail.vue'
import CharacterSearch from '@/characters/pages/CharacterSearch.vue'
import CharacteList from '@/characters/pages/CharacterList.vue'

export const characterRoute: RouteRecordRaw = {
    path: '/characters',
    redirect: '/characters/list',
    component: CharacterLayout,
    children: [
        {
            path: 'detail/id', 
            name: 'character-detail', 
            props: { title: 'Por Id', visible: false, },
            component: CharacterDetail
        },
        {
            path: 'list', 
            name: 'character-list', 
            props: { title: 'Lista', visible: true,},
            component: CharacteList
        },
        {
            path: 'search', 
            name: 'character-search', 
            props: { title: 'Busqueda', visible: true,},
            component: CharacterSearch
        },
    ]
}