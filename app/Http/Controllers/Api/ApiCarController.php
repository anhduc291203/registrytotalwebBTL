<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class ApiCarController extends Controller
{
    protected $car;

    public function __construct(Car $car)
    {
        $this->car = $car;
    }

    public function invoke(){
        $carInfo = $this->car->getAllOwnersWithCars();
        return response(compact('carInfo'));
    }

}
