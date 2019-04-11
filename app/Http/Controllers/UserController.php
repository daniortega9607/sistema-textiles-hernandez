<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use App\NotificationEvent;
use App\Entity;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(User::all());
    }

    public function store(Request $request)
    {
        $data = $request->only(['name', 'email', 'password', 'superadmin', 'user_type', 'customer_id']);
        $data['password'] = bcrypt($data['password']);

        $item = User::create($data);

        NotificationEvent::create([
            'entity_id' => Entity::where('name','users')->first()->id,
            'entity_value_id' => $item->id,
            'type' => 1
        ]);
        
        return response()->json([
            'status' => (bool) $item,
            'data' => $item,
            'message' => (bool) $item ? trans('global.created') : trans('global.error_created')
        ]);
    }

    public function show(Request $request, User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $status = $user->update($request->all());

        NotificationEvent::create([
            'entity_id' => Entity::where('name','users')->first()->id,
            'entity_value_id' => $user->id,
            'type' => 3
        ]);
        
        return response()->json([
            'status' => (bool) $status,
            'data' => $user,
            'message' => (bool) $status ? trans('global.updated') : trans('global.error_updated')
        ]);
    }

    public function destroy(User $user)
    {
        $status = $user->delete();

        NotificationEvent::create([
            'entity_id' => Entity::where('name','users')->first()->id,
            'entity_value_id' => $user->id,
            'type' => 4
        ]);
        
        return response()->json([
            'status' => (bool) $status,
            'message' => (bool) $status ? trans('global.deleted') : trans('global.error_deleted')
        ]);
    }

    public function login(Request $request)
    {
        $response = ['status' => false, 'message' => 'Correo o contraseña equivocados'];

        if (Auth::attempt($request->only(['email', 'password']))) {
            $user = User::find(Auth::user()->id);
            $scopes = [];
            $response = [
                'status' => true,
                'user' => $user,
                'token' => Auth::user()->createToken('app', $scopes)->accessToken,
                'message' => 'Bienvenido '.$user->name
            ];
        }

        return response()->json($response);
    }
}
