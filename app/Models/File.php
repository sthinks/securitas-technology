<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\File
 *
 * @property int $id
 * @property string $title
 * @property string $file
 * @mixin \Eloquent
 */
class File extends Model
{
    use HasFactory, LogsActivity;
    protected $guarded = [];
}
