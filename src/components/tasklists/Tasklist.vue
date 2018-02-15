<template>
    <div class="tasklist">
        <tasklist-header :list-id="listId">
        </tasklist-header>
        <tasklist-body :list-id="listId">
        </tasklist-body>
    </div>
</template>

<script>

    import TasklistHeader from './TasklistHeader';
    import TasklistBody from './TasklistBody';

    export default {
        name: 'tasklist',
        props: ['listId'], 
        components: { TasklistHeader, TasklistBody }
    };

</script>
