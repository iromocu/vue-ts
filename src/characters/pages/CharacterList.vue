<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue';

const props = defineProps<{ title: string, visible: boolean }>();
console.log(props);


</script>
<template>
    <div>
        <h1>{{ props.title }}</h1>
        <CardList />
    </div>
</template>


<style scoped>

</style>