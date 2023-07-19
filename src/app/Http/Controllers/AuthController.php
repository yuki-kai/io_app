<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);

        return response($user, Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'error' => 'ログインに失敗しました'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $request->session()->regenerate();
        return response()->json(Auth::user());

        // /** @var User $user */
        // $user = Auth::user();
        // $jwt = $user->createToken('token')->plainTextToken;

        // $cookie = cookie('jwt', $jwt, 15);

        // return response([
        //    'jwt' => $jwt
        // ])->withCookie($cookie);
    }

    public function user(Request $request)
    {
        \Log::debug('userメソッド');
        return $request->user();
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(true);

        // $cookie = Cookie::forget('jwt');

        // return response([
        //    'message' => 'ログアウトしました'
        // ])->withCookie($cookie);
    }
}
