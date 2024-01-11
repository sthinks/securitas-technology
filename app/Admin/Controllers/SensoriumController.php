<?php

namespace App\Admin\Controllers;

use App\Models\Sensorium;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class SensoriumController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Sensorium';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Sensorium());

        $grid->column('id', __('admin.id'));
        $grid->column('date_of', __('admin.date_of'));
        $grid->column('title', __('admin.title'));
        $grid->column('file', __('admin.file'));
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
    protected function detail($id)
    {
        $show = new Show(Sensorium::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('date_of', __('admin.date_of'));
        $show->field('title', __('admin.title'));
        $show->field('file', __('admin.file'));
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
    protected function form()
    {
        $form = new Form(new Sensorium());

        $form->date('date_of', __('admin.date_of'))->default(date('Y-m-d'));
        $form->text('title', __('admin.title'));
        $form->file('file', __('admin.file'));
        $form->image('image', __('admin.image'));

        return $form;
    }
}
