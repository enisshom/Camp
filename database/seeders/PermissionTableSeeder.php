<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\DB;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',
            'product-list',
            'product-create',
            'product-edit',
            'product-delete',
            'check-in',
            'check-out',
<<<<<<< HEAD
            'Marrakech',
            'Marzouga',
=======
            'MARRAKECH',
            'MERZOUGA',
            'ZAGOURA',
>>>>>>> 72a0d59239f68dadce94be7242936e84d68b8df6
        ];

        foreach($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        DB::table('role_has_permissions')->insert(['permission_id' => 1, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 2, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 3, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 4, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 5, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 6, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 7, 'role_id' => 1,]);
        DB::table('role_has_permissions')->insert(['permission_id' => 8, 'role_id' => 1,]);

    }
}
