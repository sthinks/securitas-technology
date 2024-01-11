<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ReviewResource;
use App\Http\Resources\SensoriumResource;
use App\Http\Resources\SearchResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\StoryResource;
use App\Models\Category;
use App\Models\Sensorium;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Review;
use App\Models\City;
use App\Models\Story;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Cache;

class CategoryController extends Controller
{
    public function get(string $seo_url, Request $request)
    {
        $cache_id = sprintf('categories_%s', $seo_url);
        if(!Cache::has($cache_id)) {
            $category = Category::where('slug', $seo_url)->firstOrFail();
            $data = new CategoryResource($category);
            $json = json_encode($data, JSON_UNESCAPED_UNICODE);
            Cache::put($cache_id, $json, 24 * 60 * 60);
            return response($json)->withHeaders([
                'Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'
            ]);
        }
        $data = Cache::get($cache_id);
        return response($data)->withHeaders([
            'Content-Type' => 'application/json;charset=UTF-8', 'Charset' => 'utf-8'
        ]);
    }
    public function blog(string $seo_url, Request $request): JsonResponse
    {
        $post = Post::where('slug', $seo_url)->firstOrFail();
        return response()->json(new PostResource($post));
    }
    public function sensorium(): JsonResponse
    {
        $all = Sensorium::all();
        return response()->json(SensoriumResource::collection($all));
    }
    public function search(Request $request) {
        $validator = Validator::make($request->all(), [
            'q' => 'required|string',
        ]);
 
        if ($validator->fails()) {
            return response()->json(['msg' => 'error'], 400);
        }
 
        // Retrieve the validated input...
        $validated = $validator->validated();
        
        $category = Category::where('title', 'LIKE', '%'. $validated['q'] .'%')->limit(5)->get();
        return response()->json(SearchResource::collection($category));
    }
    public function cities(): JsonResponse{
        return response()->json(City::get(['city'])->flatten());
    }
    public function reviews(): JsonResponse{
        return response()->json(ReviewResource::collection(Review::all()));
    }
    public function story(string $seo_url): JsonResponse{
        $story = Story::where('slug', $seo_url)->firstOrFail();
        return response()->json(new StoryResource($story));
    }
}
