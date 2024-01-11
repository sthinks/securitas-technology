<?php

namespace App\Admin\Controllers;

use App\Models\Story;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\Category;
class StoryController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Story';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Story());

        $grid->column('id', __('admin.id'));
        $grid->column('title', __('admin.title'));
        $grid->column('desc', __('admin.desc'));
        $grid->column('image', __('admin.image'));
        $grid->column('slug', __('admin.slug'));
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
        $show = new Show(Story::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('title', __('admin.title'));
        $show->field('desc', __('admin.desc'));
        $show->field('image', __('admin.image'));
        $show->field('slug', __('admin.slug'));
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
        $form = new Form(new Story());
        $form->multipleSelect('categories','Category')->options(Category::all()->pluck('title','id'));
        $form->text('title', __('admin.title'));
        $form->ckeditor('desc', __('admin.desc'));
        $form->image('image', __('admin.image'));
        $form->image('cover', __('admin.cover'));
        return $form;
    }
}
