<template>
    <div>
        <div class="chat-body clearfix">
            <div class="header">
                <strong class="primary-font">{{message.user.name}}</strong> <small class="pull-right text-muted">
                    <span class="glyphicon glyphicon-time"></span>12 mins ago</small>
            </div>
            <p>
                {{message.body}}
            </p>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
  props: ['message']
};
</script>

