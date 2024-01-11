<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;
use App\Utils\UrlHelper;

class SensoriumResource extends JsonResource
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
            "year" => date('Y', strtotime($this->date_of)),
            "title" => $this->title,
            "file" => UrlHelper::getFileFromStorage($this->file),
            "date" => Carbon::parse($this->date_of)->translatedFormat('d F Y'),
            "image" => UrlHelper::getFileFromStorage($this->image),
        ];
    }
}
