<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => ['required', 'unique:users'],
            'role' => ['required', 'string']
        ]);

        User::create($request->all());
        
        return response()->json([
            'message' => 'success',
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role, $id)
    {
        $request->validate([
            'user_id' => ['required', 'unique:users'],
            'role' => ['required', 'string']
        ]);

        $role = Role::findOrFail($id);
        $role->update($request->all);

        return response()->json([
            'message' => 'success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role, $id)
    {
        $role = Role::findOrFail($id);

        if($role->user()->exist()){
            return response()->json([
                'message' => 'Is being referenced and cannot be deleted'
            ], 422);
        } else{
            $role->delete();

            return response()->json([
                'message' => 'Successfully Deleted',
            ], 200);
        }
    }
}
