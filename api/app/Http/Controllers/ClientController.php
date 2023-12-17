<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
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
            'profile' => ['string'],
            'first_name' => ['required', 'string'],
            'middle_name' => ['string'],
            'last_name' => ['required', 'string'],
            'mobile' => ['required'],
            'address' => ['required', 'string'],
        ]);

        Client::create($request->all());
        
        return response()->json([
            'message' => 'success',
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client, $id)
    {
        $request->validate([
            'user_id' => ['required', 'unique:users'],
            'profile' => ['string'],
            'first_name' => ['required', 'string'],
            'middle_name' => ['string'],
            'last_name' => ['required', 'string'],
            'mobile' => ['required'],
            'address' => ['required', 'string'],
        ]);

        $client = Client::findOrFail($id);
        $client->update($request->all);

        return response()->json([
            'message' => 'success'
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client, $id)
    {
        $client = Client::findOrFail($id);

        if($client->user()->exist()){
            return response()->json([
                'message' => 'Is being referenced and cannot be deleted'
            ], 422);
        } else{
            $client->delete();

            return response()->json([
                'message' => 'Successfully Deleted',
            ], 200);
        }
    }
}
