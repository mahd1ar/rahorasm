<script setup lang="ts">

const { data } = useAPI('/blog/posts')

</script>

<template>
  <div>
    <pre>
      {{data}}
    </pre>
  </div>
</template>

<style scoped></style>
