<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Spatie\Permission\Models\Role;
use DB;
use Hash;
use Illuminate\Support\Arr;

class UserController extends Controller
{

    // public function hasroles($user){
    //     // dd($roles);
    //      $roles = $this->roles()->first();
 
 
    //      return (bool)Role::whereHas('permissions', function (Builder $query) use ($permission) {
    //          $query->where('name', $permission);
    //      })->where('id', $roles->id)->count(); 
 
    //      // return Permission::whereHas('roles', function (Builder $query) use ($roles) {
    //      //     $query->where('id', $roles{0}->id);
    //      // })->where('title', $permission)->count();
    //      //return false;
    //  }

    public function index(Request $request)
    {
        // $data = DB::table('users')->get();
        // $data =  $data->toJson();
        // $data =  json_decode($data);
        // return view('users.index',['data'=> $data]);
<<<<<<< HEAD
        $data = User::orderBy('id','DESC')->paginate(5);
<<<<<<< HEAD
        return view('users.index',compact('data'))
=======
        $id = session()->get('camp_id');
        return view('parametrage.users.index',compact('data','id'))
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        $data = User::orderBy('id', 'DESC')->paginate(5);
        $id = session()->get('camp_id');
        return view('parametrage.users.index', compact('data', 'id'))
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
                ->with('i', ($request->input('page', 1) - 1) * 5);
    }

    public function create()
    {
<<<<<<< HEAD
        $roles = Role::pluck('name','name')->all();
<<<<<<< HEAD
        return view('users.create',compact('roles'));
=======
        $id = session()->get('camp_id');
        return view('parametrage.users.create',compact('roles','id'));
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        $roles = Role::pluck('name', 'name')->all();
        $id = session()->get('camp_id');
        return view('parametrage.users.create', compact('roles', 'id'));
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|same:confirm-password',
            'roles' => 'required'
        ]);
    
        $input = $request->all();
        $input['password'] = Hash::make($input['password']);
    
        $user = User::create($input);
        $user->assignRole($request->input('roles'));
    
        return redirect()->route('users.index')
                        ->with('success','User created successfully');
    }

    public function show($id)
    {
        $user = User::find($id);
        $id = session()->get('camp_id');
        return view('parametrage.users.show',compact('user','id'));
    }

    public function edit($id)
    {
        $user = User::find($id);
        $roles = Role::pluck('name','name')->all();
<<<<<<< HEAD
        $userRole = $user->roles->pluck('name','name')->all();
<<<<<<< HEAD
    
        return view('users.edit',compact('user','roles','userRole'));
=======
        $id = session()->get('camp_id');
        return view('parametrage.users.edit',compact('user','roles','userRole','id'));
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        $userRole = $user->roles->pluck('name', 'name')->all();
        $id = session()->get('camp_id');
        return view('parametrage.users.edit', compact('user', 'roles', 'userRole', 'id'));
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$id,
            'password' => 'same:confirm-password',
            'roles' => 'required'
        ]);
    
        $input = $request->all();
        if(!empty($input['password'])){ 
            $input['password'] = Hash::make($input['password']);
        }else{
            $input = Arr::except($input,array('password'));    
        }
    
        $user = User::find($id);
        $user->update($input);
        DB::table('model_has_roles')->where('model_id',$id)->delete();
    
        $user->assignRole($request->input('roles'));
    
        return redirect()->route('users.index')
                        ->with('success','User updated successfully');
    }

    public function destroy($id)
    {
        User::find($id)->delete();
        return redirect()->route('users.index')
                        ->with('success','User deleted successfully');
    }
}
