<?php

namespace App\Http\Resources;

use App\Utils\UrlHelper;
use Illuminate\Http\Resources\Json\JsonResource;

class ReferenceResource extends JsonResource
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
            'company' => $this->company,
            'description' => $this->description,
            'comments' => $this->comments,
            'image' => UrlHelper::getFileFromStorage($this->image)
        ];
    }
}
