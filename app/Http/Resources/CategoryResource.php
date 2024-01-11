<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Utils\UrlHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'full_url' => $this->full_url,
            'image' => UrlHelper::getFileFromStorage($this->image),
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'body' => $this->body,
            'children' => SubCategoryResource::collection($this->children),
            'meta' => [
                'references' => ReferenceResource::collection($this->references()->get()),
                'files' => FileResource::collection($this->attachments()->get()),
                'blogs' => PostResource::collection($this->posts()->get())
            ],
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'similar_categories' => $this->getParent ? $this->getParent->children->where('id', '!=', $this->id)->flatten() : null,
            'banner' => UrlHelper::getFileFromStorage($this->banner),
            'videos' => $this->videos,
            'partners' => $this->partners()->get(),
            'products' => ProductResource::collection($this->products()->get()),
            'stories' => StoryResource::collection($this->stories()->get()),
            'breadcrumb' => $this->buildBreadcrumb()
        ];
    }
}
