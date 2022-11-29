<script setup lang="ts">
import breakingBadApi from "@/api/breakingBadApi";
import { useQuery } from "@tanstack/vue-query";
// import { useCharacters } from "../composables/useCharacters";
import type { Character } from '@/characters/interfaces/character';
import CharacterCard from '@/characters/components/CharacterCard.vue';

//! 1- Normal suspense
// <Suspense></Suspense>
// const {data}= await breakingBadApi.get<Character[]>('/characters')
// let characters = ref<Character[]>(data);

//! 2-Composable functions
// const { characters, isLoading, hasError, errorMessage } = useCharacters();


//! 3-TanStack Query
const getCharactersSlow = async ():Promise<Character[]> => {
  const { data } = await breakingBadApi.get<Character[]>('/characters')
  return data.filter(character => ![14, 17, 39].includes(character.char_id))
}
const {isLoading, isError , data: characters, error} = useQuery(
  ['characters'], 
  getCharactersSlow,
  {
    cacheTime: 1000 * 60
  }
)

</script>
<template>
    <h1 v-if="isLoading">Loading ...</h1>
    <h1 v-if="isError">{{error}}</h1>
  <div class="card-list">
    <CharacterCard v-for="character of characters" :key="character.char_id" :character="character"></CharacterCard>
  </div>
</template>

<style scoped>
.card-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
