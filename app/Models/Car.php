<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected  $table = 'car_info';

    protected $fillable = [
        'id',
        'certificate_id',
        'start_date',
        'end_date',
        'center_name',
        'license_plate',
        'type',
    ];

    public function carPurposes()
    {
        return $this->belongsToMany(CarPurpose::class, 'car_purpose_car_info', 'car_info_id', 'car_purpose_id');
    }

    public function owners()
    {
        return $this->belongsToMany(Owner::class, 'car_info_owner', 'car_info_id', 'owner_id');
    }

    public function userInfo()
    {
        return $this->belongsTo(UserInfo::class, 'center_name', 'name');
    }

    public function info(){
        return Car::all();
    }


    public function getAllOwnersWithCars()
    {
        $cars = Car::with('owners', 'carPurposes')->get();

        $data = [];

        foreach ($cars as $car) {
            $licensePlate = $car->license_plate;
            $owners = $car->owners;
            $purposes = $car->carPurposes->pluck('purpose')->toArray();

            foreach ($owners as $owner) {
                $data[] = [
                    'license_plate' => $licensePlate,
                    'owner_name' => $owner->name,
                    'purposes' => $purposes,
                ];
            }
        }

        return $data;
    }



}
