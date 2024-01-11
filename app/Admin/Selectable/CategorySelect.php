<?php

namespace App\Admin\Selectable;

use App\Models\Category;
use Encore\Admin\Grid\Selectable;

class CategorySelect extends Selectable
{

    public $model = Category::class;

    public function make()
    {
        $this->column('id');
        $this->column('title');
    }
}
