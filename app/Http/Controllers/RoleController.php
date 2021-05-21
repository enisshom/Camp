<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;

class RoleController extends Controller
{
    function __construct()
    {
        // dd(Permission::get());
         $this->middleware('permission:role-list|role-create|role-edit|role-delete', ['only' => ['index','store']]);
         $this->middleware('permission:role-create', ['only' => ['create','store']]);
         $this->middleware('permission:role-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:role-delete', ['only' => ['destroy']]);
    }

    public function index(Request $request)
    {
        $roles = DB::table('roles')->get();
        $roles =  $roles->toJson();
        $roles =  json_decode($roles);
<<<<<<< HEAD
<<<<<<< HEAD
        return view('roles.index',['roles'=> $roles]);
=======
        $id = session()->get('camp_id');
        return view('parametrage.roles.index',['roles'=> $roles,'id'=>$id]);
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        $id = session()->get('camp_id');
        return view('parametrage.roles.index', ['roles' => $roles, 'id' => $id]);
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
    }

    public function create()
    {
        $permission = Permission::get();
<<<<<<< HEAD
<<<<<<< HEAD
        return view('roles.create',compact('permission'));
=======
        $id = session()->get('camp_id');
        return view('parametrage.roles.create',compact('permission','id'));
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        $id = session()->get('camp_id');
        return view('parametrage.roles.create', compact('permission', 'id'));
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:roles,name',
            'permission' => 'required',
        ]);
    
        $role = Role::create(['name' => $request->input('name')]);
        $role->syncPermissions($request->input('permission'));
    
        return redirect()->route('roles.index')
                        ->with('success','Role created successfully');
    }

    public function show($id)
    {
        $role = Role::find($id);
        $rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=","permissions.id")
            ->where("role_has_permissions.role_id",$id)
<<<<<<< HEAD
            ->get();
<<<<<<< HEAD
    
        return view('roles.show',compact('role','rolePermissions'));
=======
        $id = session()->get('camp_id');
        return view('parametrage.roles.show',compact('role','rolePermissions','id'));
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        ->get();
        $id = session()->get('camp_id');
        return view('parametrage.roles.show', compact('role', 'rolePermissions', 'id'));
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
    }

    public function edit($id)
    {
        $role = Role::find($id);
        $permission = Permission::get();
        $rolePermissions = DB::table("role_has_permissions")->where("role_has_permissions.role_id",$id)
            ->pluck('role_has_permissions.permission_id','role_has_permissions.permission_id')
<<<<<<< HEAD
            ->all();
<<<<<<< HEAD
    
        return view('roles.edit',compact('role','permission','rolePermissions'));
=======
        $id = session()->get('camp_id');
        return view('parametrage.roles.edit',compact('role','permission','rolePermissions','id'));
>>>>>>> 90f06c8cf2d1746bbebf55cc0a6733229e0aed51
=======
        ->all();
        $id = session()->get('camp_id');
        return view('parametrage.roles.edit', compact('role', 'permission', 'rolePermissions', 'id'));
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required',
            'permission' => 'required',
        ]);
    
        $role = Role::find($id);
        $role->name = $request->input('name');
        $role->save();
    
        $role->syncPermissions($request->input('permission'));
    
        return redirect()->route('roles.index')
                        ->with('success','Role updated successfully');
    }

    public function destroy($id)
    {
        DB::table("roles")->where('id',$id)->delete();
        return redirect()->route('roles.index')
                        ->with('success','Role deleted successfully');
    }
}
