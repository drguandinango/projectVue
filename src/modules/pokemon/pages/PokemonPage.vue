<template>
    <section class="flex flex-col">
        <h1 class="text-3xl font-bold">Pokémon <small class="text-blue-500">#{{ id }}</small></h1>


        <img :src="pokemonImageUrl" alt="pokemon" class="w-[200px] h-[200px] mt-5" width="200" height="200" />

        <RouterLink class="
bg-blue-500
text-white
p-2 rounded mt-5 text-center hover:bg-blue-700" :to="{ name: 'pokemon', params: { id: nextPokemonId } }">suguiente
        </RouterLink>

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
