<template>
    <div>
        <v-btn :icon="icon" :disabled="disabled || false" :size="size" :class="css" :variant="variant" :loading="loading"
            :color="color || 'primary'" :to="to">
            <v-icon v-if="icon">{{ icon }}</v-icon>
            {{ text }}
        </v-btn>
    </div>
</template>

<script setup>
const { loading, disabled, text, css, color, variant, icon, size, to } =
    defineProps(["loading", "disabled", "text", "css", "color", "variant", "icon", "size", "to"])

</script>

<style lang="scss" scoped></style>