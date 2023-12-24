<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user_id = Auth::id();

        $reservation = Reservation::where('user_id', $user_id)->latest('updated_at')->get();

        return $reservation;
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
            'user_id' => ['required', 'integer'],
            'fullname' => ['required', 'string'],
            'description' => ['required', 'string'],
            'email' => ['required', 'string'],
            'phone' => ['required'],
            'date' => ['required'],
            'time_from' => ['required'],
            'time_to' => ['required'],
        ]);

        $reservation = Reservation::create($request->all());
       
        return response()->json([
            'message' => 'success',
            'data' => $reservation
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reservation $reservation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reservation $reservation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reservation $reservation)
    {
        $request->validate([
            'user_id' => ['required', 'integer'],
            'fullname' => ['required', 'string'],
            'description' => ['required', 'string'],
            'email' => ['required', 'string'],
            'phone' => ['required'],
            'date' => ['required'],
            'time_from' => ['required'],
            'time_to' => ['required'],
        ]);

        $reservation = Reservation::findOrFail($request->id);
        $reservation->update($request->all());

        return response()->json([
            'message' => 'success',
            'data' => $reservation
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $reservation = Reservation::findOrFail($id);

        $reservation->delete();

        return response()->json([
            'message' => 'Successfully Deleted',
        ], 200);
    }
}
