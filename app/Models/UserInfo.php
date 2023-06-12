<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInfo extends Model
{
    use HasFactory;

    protected $table = 'user_infos';

    protected $fillable = [
        'id',
        'name',
        'address',
    ];
    public function carInfos()
    {
        return $this->hasMany(Car::class, 'center_name', 'name');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'name', 'address');
    }
}
