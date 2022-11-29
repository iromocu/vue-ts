<script setup lang="ts">
import { toRef } from 'vue';
import type { Character } from '../interfaces/character';

interface Props{
    character: Character
}
const props = defineProps<Props>()
const character = toRef(props, 'character')
</script>
<template>
    <div class="character-card">
        <img  :src="character.img" :alt="character.name"/>
        <h3>{{character.name}}</h3>
    </div>
</template>


<style scoped>
.character-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 10px;
}
img{
    width: 150px;
    border-radius: 5px 0;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1) ;
    height: 220px;
    object-fit: cover;
}
</style>