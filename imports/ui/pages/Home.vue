<template>
    <div class="home">
        <h1>Welcome on app</h1>
        <ul>
            <todo v-for="todo in todos" :todo="todo"></todo>
        </ul>
    </div>
</template>

<script>
import Todo from '/imports/ui/components/Todo';

  export default {
    data() {
      return {
        todos: ["Add route","Add collection", "Add vue components"]
      }
    },
    components: {
      Todo
    }
  }
</script>
