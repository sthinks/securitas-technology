<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Utils\UrlHelper;

class SubCategoryResource extends JsonResource
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
            'slug' => $this->slug,
            'full_url' => $this->full_url,
            'children' => $this->children,
            'meta' => [
                'references' => ReferenceResource::collection($this->references()->get()),
                'files' => FileResource::collection($this->attachments()->get()),
                'blogs' => PostResource::collection($this->posts()->get())
            ],
            'breadcrumb' => $this->buildBreadcrumb(),
            'image' => UrlHelper::getFileFromStorage($this->image),
            'stories' => StoryResource::collection($this->stories()->get()),
        ];
    }
}
