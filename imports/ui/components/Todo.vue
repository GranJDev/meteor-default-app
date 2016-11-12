<template>
    <li>{{todo}}</li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: String,
        required: true
      }
    }
  }
</script>
