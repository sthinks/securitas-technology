<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Utils\UrlHelper;

class StoryResource extends JsonResource
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
            "title" => $this->title,
            "image" => UrlHelper::getFileFromStorage($this->image),
            "cover" => UrlHelper::getFileFromStorage($this->cover),
            "desc" => $this->desc,
            "slug" => $this->slug,
        ];
    }
}
