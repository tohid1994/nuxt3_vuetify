<template>
    <div class="relative">
        <label class="!label">{{ label }}</label>
        <v-textarea :counter="160" v-model="text" :rules="rule" :error-messages="error || ''"
            @update:model-value="emit('update:modelValue', text)">
            <template v-slot:append-inner>
                <v-icon @click=" showEmoji = !showEmoji">
                    mdi-emoticon-outline
                </v-icon>
            </template>
        </v-textarea>

        <div v-if="showEmoji" class="absolute top-[22px] right-[-290px]">
            <ClientOnly>
                <EmojiPicker :native="true" @select="insert" />
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
import EmojiPicker from 'vue3-emoji-picker'

// import css
import 'vue3-emoji-picker/css'
let emit = defineEmits(['update:modelValue']);
const { rule, error, label } = defineProps(["rule", "error", "label"])

const showEmoji = ref(false)

const text = ref("")
const insert = (emoji) => {
    text.value += emoji.i
}
</script>

<style lang="scss" scoped></style>