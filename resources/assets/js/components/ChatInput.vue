<template>
  <div class="panel-footer">
    <div class="input-group">
        <input id="btn-input" type="text" class="form-control input-sm" placeholder="Type your message here..."  v-model="newMessage" v-on:keyup.enter="sendMessage"/>
        <span class="input-group-btn">
            <button class="btn btn-warning btn-sm" id="btn-chat" @click="sendMessage">
                Send</button>
        </span>
    </div>
</div>
</template>

<script>
export default {

  props: ['user'],

  data(){
      return {
          newMessage: '',
      }
  },

  methods: {
      sendMessage() {
          this.$emit('send', {
              user: this.user,
              body: this.newMessage
          });
          this.newMessage = ""
      }
  }
}
</script>

