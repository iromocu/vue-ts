<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { RouteLink } from '@/router/link-routes';

interface Props{
    title?: string;
    links: RouteLink[];
    showIcon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    showIcon: true,
    links: () => []
});


</script>

<template>
    <nav>
        <img  v-if="props.showIcon" src="@/assets/logo.svg" alt="vue logo" height="25" width="25"/>
        <span v-if="props.title">{{props.title}}</span>
        <RouterLink 
            v-for="link of props.links"
            :key="link.path" :to="link.path">
            {{link.title}}
        </RouterLink>
        <!-- <RouterLink to="/about">Nosotros</RouterLink> -->
    </nav>
</template>

<style scoped>
nav{
    align-items: flex-end;
    display: flex;
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
    width: 100vw;
}
img{
    margin-right: 5px;
}
span {
    margin-right: 10px;
}
a{
    margin-right: 5px;
}
.router-link-active{
    text-decoration: underline;
    font-weight: bolder;
    color: #727272;
}
</style>