<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\SendMessage;
use App\Message;

class MessageController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function index(){
        return Message::with('user')->get();
    }

    public function store(){
        $this->validate(request(), [
            'body' => 'required'
        ]);

        $message = Auth::user()->message()->create([
            'body' => request('body')
        ]);
        $user = Auth::user();

        broadcast(new SendMessage($message, $user))->toOthers();
    }
}
