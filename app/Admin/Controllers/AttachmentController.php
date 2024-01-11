<?php

namespace App\Admin\Controllers;

use App\Models\Attachment;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\Category;
class AttachmentController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Attachment';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Attachment());
        $grid->column('title', __('admin.title'));
        $grid->column('file', __('admin.file'));
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
        $show = new Show(Attachment::findOrFail($id));
        $show->field('title', __('admin.title'));
        $show->field('file', __('admin.file'));
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
        $form = new Form(new Attachment());
        $form->multipleSelect('categories','Category')->options(Category::all()->pluck('title','id'));
        $form->text('title', __('admin.title'));
        $form->file('file', __('admin.file'));
        $form->image('image', __('admin.image'));

        return $form;
    }
}
