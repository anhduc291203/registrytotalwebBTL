<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    use HasFactory;

    protected $table = 'owner';

    protected $fillable = [
        'id',
        'address',
        'age',
    ];

    public function carInfos()
    {
        return $this->belongsToMany(Car::class, 'car_info_owner', 'owner_id', 'car_info_id');
    }
}
