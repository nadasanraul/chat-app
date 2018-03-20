@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-5 col-centered">
            <div class="panel panel-primary">
                <chat-window :messages="messages"></chat-window>
                <chat-input v-on:send="addMessage" :user="{{Auth::user()}}"></chat-input>
            </div>
        </div>
    </div>
</div>

@endsection
