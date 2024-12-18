<template>
  <div v-if="events.e.length>0">
    <div v-for="(event,index) in events.e" :key="index">
      <h1>{{ event.summary }}</h1>
      <p>
        start {{ event.start.dateTime }}
        <br>
        end {{ event.end.dateTime }}
      </p>
    </div>
  </div>
  <div v-else>
    <h1>No events found</h1>
  </div>
</template>

<script setup lang="ts">
const events = await $fetch('/api/get-calendar-events').catch(error => error.data)

</script>
