<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Http\Resources\HomeSliderResource;
use App\Models\HomeSlider;
use Illuminate\Http\JsonResponse;


class HomeSliderController extends Controller
{    public function slider(): JsonResponse{
        return response()->json(HomeSliderResource::collection(HomeSlider::all()));
    }

}
