<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $table = 'reservation';
    protected $primaryKey = 'id';

    public function user()
    {
        return $this->hasOne(User::class, 'user_id');
    }

    protected $fillable = [
        'user_id',
        'fullname',
        'description',
        'address',
        'email',
        'phone',
        'date',
        'time_from',
        'time_to',
        'status'
    ];
}
