<template>
    <NuxtLayout>

    </NuxtLayout>
</template>
<script setup>
const error = useError();
if (error.value.statusCode == 404) {
    useRouter().replace({ path: '/error/404' })
} else {
    useRouter().replace({ path: '/error/unknown' })
}
</script>