<template>
  <div class="panel-body">
        <ul class="chat">
            <chat-message v-for="message in messages"  v-bind:key="message.id"></chat-message>
        </ul>
    </div>
</template>

<script>
export default {
  props: ['messages']
}
</script>

