<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Models\User;

class ApiUserInfoController extends Controller
{


    public function getInfo()
    {
       $user = new User();
       $data = $user->getCarInfo();

       return response(compact('data'));
    }

    public function getForecast(){
        $user = new User();
        $data = $user->getCarInfo();
        $forecastData = [];
        foreach ($data as $object) {
            $month = \Carbon\Carbon::parse($object['end_date'])->format('M');
            $object['month_end'] = $month;
            $forecastData[] = $object;
        }
        return response(compact('forecastData'));
    }

    public function manageForecast(){
        $car = new Car();
        $data = $car->info();
        $forecastCarData = [];
        foreach ($data as $object) {
            $month = \Carbon\Carbon::parse($object['end_date'])->format('M');
            $object['month_end'] = $month;
            $forecastCarData[] = $object;
        }
        return response(compact('forecastCarData'));
    }


}
