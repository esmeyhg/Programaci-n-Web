<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function show ($name) {
        //$user = \DB::table('users')->where('name', $name)->first();
/* 
        if(! $user) {
            abort(404);
        } */
        return view('users', [ 'user' => User::where('name', $name)->firstOrFail()]);
        //dd($user);
    }

    public function saluda() {
        return view('users', ['name' => 'José']);
       // return view('users')->with('name', 'Esmeralda');
    }
}
