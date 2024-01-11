<?php

namespace App\Admin\Controllers;

use App\Models\Review;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ReviewController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Review';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Review());

        $grid->column('id', __('admin.id'));
        $grid->column('image', __('admin.image'));
        $grid->column('reviewer', __('admin.reviewer'));
        $grid->column('desc', __('admin.desc'));
        $grid->column('created_at', __('admin.created_at'));
        $grid->column('updated_at', __('admin.updated_at'));

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Review::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('image', __('admin.image'));
        $show->field('reviewer', __('admin.reviewer'));
        $show->field('desc', __('admin.desc'));
        $show->field('created_at', __('admin.created_at'));
        $show->field('updated_at', __('admin.updated_at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Review());

        $form->image('image', __('admin.image'));
        $form->text('reviewer', __('admin.reviewer'));
        $form->textarea('desc', __('admin.desc'));

        return $form;
    }
}
