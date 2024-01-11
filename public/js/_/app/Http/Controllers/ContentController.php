<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use TCG\Voyager\Models\Post;
use TCG\Voyager\Models\Category;
use App\Models\Slider;
use App\Models\Card;
use App\Models\Widget;
use App\Models\News;
use App\Models\Contactcard;
use App\Models\Job;

class ContentController extends Controller
{
    public function fetch(string $slug,Request $request)
    {
        $post = Post::where('slug', $slug)->firstOrFail();
        $widget = Widget::where('post_id', $post->id)->get();
        $widget->map(function($item){
            $item->icon = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->image)
                )
            );
        });
        $post->widget = $widget->translate($request->api_pref_lang);
        $post = $post->translate($request->api_pref_lang);
        $post->banner = url(
            sprintf(
                "storage/%s",
                str_replace('\\', '/', $post->image)
            )
        );
        return response()->json($post);
    }
    public function all(string $category){
        $category = Category::where('slug', $category)->firstOrFail();
        $category->banner = url(
            sprintf(
                "storage/%s",
                str_replace('\\', '/', $category->poster)
            )
        );
        $post = $category->posts()->get();
        $post->map(function($item){
            $item->poster = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $item->mini_image)
                )
            );
        });
        $category->posts = $post->makeHidden(['category_id']);
        return response()->json($category);
    }
    public function slider(Request $request){
        $sliders = Slider::all();
        $sliders = $sliders->translate($request->api_pref_lang);
        $sliders->map(function($slider) {
            $slider->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\', '/', $slider->image)
                )
            );
        });
        return response()->json($sliders);
    }
    public function cards(Request $request){
        $cards = Card::all();
        $cards = $cards->translate($request->api_pref_lang);
        $cards->map(function($card) {
            $card->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\','/', $card->image)
                )
                );
        });
        return response()->json($cards);

    }
    public function news(Request $request){
        $news = News::orderBy('date', 'DESC')->get();
        $news = $news->translate($request->api_pref_lang);
        $news->map(function($new) {
            $new->image = url(
                sprintf(
                    "storage/%s",
                    str_replace('\\','/', $new->image)
                )
                );
        });
        return response()->json($news);

    }
    public function contactcard(){
        $contentcards = Contactcard::all();
        return response()->json($contentcards->makeHidden(['id']));

    }
    public function haberdetay($slug){
        $detay = News::where('slug', $slug)->first();
        $detay->image = url(
            sprintf(
                "storage/%s",
                str_replace('\\', '/', $detay->image)
            )
        );
        return response()->json($detay);

    }
    public function jobs(){
        $job = Job::all();
        return response()->json($job);
    }
}
