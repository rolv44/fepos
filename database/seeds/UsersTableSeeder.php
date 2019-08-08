<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Owner
        DB::table('users')->insert([
            'user' => 'owner',
            'correo' => 'owner@gmail.com',
            'tipo_usuario' => 1,
            'password' => bcrypt('owner')
        ]);

        // Admin
        DB::table('users')->insert([
            'user' => 'admin',
            'correo' => 'admin@gmail.com',
            'tipo_usuario' => 2,
            'password' => bcrypt('admin')
        ]);

        // Purchaser
        DB::table('users')->insert([
            'user' => 'purchaser',
            'correo' => 'purchaser@gmail.com',
            'tipo_usuario' => 3,
            'password' => bcrypt('purchaser')
        ]);

        // Salesman
        DB::table('users')->insert([
            'user' => 'salesman',
            'correo' => 'salesman@gmail.com',
            'tipo_usuario' => 4,
            'password' => bcrypt('salesman')
        ]);

        // Viewer
        DB::table('users')->insert([
            'user' => 'viewer',
            'correo' => 'viewer@gmail.com',
            'tipo_usuario' => 5,
            'password' => bcrypt('viewer')
        ]);
    }
}
