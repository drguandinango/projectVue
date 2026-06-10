<template>
    <section class="flex flex-col">
        <h1>Pokémon <small class="text-blue-500">#{id}</small></h1>


        <img :src="pokemonImageUrl"
            alt="pokemon" class="w-[200px] h-[200px] mt-5" width="200" height="200" />

        <RouterLink class="
bg-blue-500
text-white
p-2 rounded mt-5
text-center" :to="{ name: 'pokemon', params: { id: nextPokemonId } }">suguiente</RouterLink>

    </section>
</template>


<script lang="ts" setup>
import { computed } from 'vue';

interface Props {

    id: string;
}

const props = defineProps<Props>();

const pokemonImageUrl = computed(
    () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.id}.svg`,
);

const nextPokemonId = computed(() => Number(props.id) + 1);
</script>
