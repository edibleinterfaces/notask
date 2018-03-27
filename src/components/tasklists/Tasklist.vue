<template>
    <div class="tasklist">
        <app-tasklist-header :list-id="listId" />
        <app-tasklist-body :list-id="listId" />
    </div>
</template>

<script>

    import TasklistHeader from './TasklistHeader';
    import TasklistBody from './TasklistBody';

    export default {
        name: 'tasklist',
        props: ['listId'], 
        components: { 
            'app-tasklist-header': TasklistHeader, 
            'app-tasklist-body': TasklistBody 
        }
    };

</script>
