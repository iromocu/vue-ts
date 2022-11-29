import breakingBadApi from "@/api/breakingBadApi";
import { onMounted, ref } from "vue";
import type { Character } from "../interfaces/character";
import axios from 'axios';

const characters = ref<Character[]>([]);
const isLoading = ref<boolean>(true);
const hasError = ref<boolean>(false)
const errorMessage = ref<string>('')

export const useCharacters = ()=>{
    onMounted(async () => {
        loadCharacters();
    })

    const loadCharacters= async ()=>{
        isLoading.value = true;
        hasError.value = false;
        try{
            const { data } = await breakingBadApi.get<Character[]>("/characters")
            characters.value = data;
            isLoading.value = false;
        }
        catch(error){
            isLoading.value = false;
            hasError.value = true;
            if(axios.isAxiosError(error)){
                return errorMessage.value = error.message;
            }
            errorMessage.value = JSON.stringify(error)
        }
    }
    

    return {
        characters,
        isLoading,
        hasError,
        errorMessage
    }
}



