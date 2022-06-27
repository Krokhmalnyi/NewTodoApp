<template>
    
    <div>
      <h1>Archived Items:</h1>
    <TodoList location="archive" />
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
export default { 
    name: "HomePage",
    components: {
        TodoList
    }
}
</script>