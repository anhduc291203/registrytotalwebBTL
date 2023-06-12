<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarPurpose extends Model
{
    use HasFactory;

    protected $table = 'car_purpose';

    protected $fillable =  [
        'id',
        'purpose',
    ];

    public function getAll()
    {
        return CarPurpose::all();
    }

    public function cars()
    {
        return $this->belongsToMany(Car::class, 'car_purpose_car_info', 'car_purpose_id', 'car_info_id');
    }

}
