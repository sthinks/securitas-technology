<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use TCG\Voyager\Traits\Translatable;

class Widget extends Model
{
    use Translatable;
    protected $translatable = ['title','content'];
}
