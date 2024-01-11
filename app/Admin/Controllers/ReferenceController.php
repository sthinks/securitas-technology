<?php

namespace App\Admin\Controllers;

use App\Models\Category;
use App\Models\Reference;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ReferenceController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Referanslar';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Reference());
        $grid->quickSearch();
        $grid->column('company', __('admin.company'));
        $grid->column('description', __('admin.description'));
        $grid->column('comments', __('admin.comments'));
        $grid->column('image', __('admin.image'));
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
    protected function detail($id): Show
    {
        $show = new Show(Reference::findOrFail($id));

        $show->field('company', __('admin.company'));
        $show->field('description', __('admin.description'));
        $show->field('comments', __('admin.comments'));
        $show->field('image', __('admin.image'));
        $show->field('created_at', __('admin.created_at'));
        $show->field('updated_at', __('admin.updated_at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form(): Form
    {
        $form = new Form(new Reference());
        $form->multipleSelect('categories','Category')->options(Category::all()->pluck('title','id'));
        $form->text('company', __('admin.company'));
        $form->text('description', __('admin.description'));
        $form->text('comments', __('admin.comments'));
        $form->image('image', __('admin.image'))->thumbnail([
            'small' => [50, 50],
            'medium' => [100, 100],
            'large' => [150, 150],
        ]);

        return $form;
    }
}
