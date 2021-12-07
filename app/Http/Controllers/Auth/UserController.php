<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Get authenticated user.
     */
    public function current(Request $request)
    {
        return response()->json($request->user());
    }
    public function getUsers(Request $request)
    {
    	if ( $request->input('showdata') ) {
    	    return User::orderBy('created_at', 'desc')->get();

    	}
        $columns = ['name', 'email', 'created_at'];
        $length = $request->input('length');
        $column = $request->input('column');
        $search_input = $request->input('search');

        // $query = User::select('name', 'email', 'created_at')->orderBy($columns[$column]);
        $query = User::select('*');

        if ($search_input) {
            $query->where(function($query) use ($search_input) {
                $query->where('name', 'like', '%' . $search_input . '%')
                ->orWhere('email', 'like', '%' . $search_input . '%')
                ->orWhere('created_at', 'like', '%' . $search_input . '%');
            });
        }

        $users = $query->paginate($length);
        return ['data' => $users];
    }

    public function deleteUser(User $user) {

        if($user) {
            $user->delete();
        }
        return 'user deleted';
    }

}
