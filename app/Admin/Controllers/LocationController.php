<?php

namespace App\Admin\Controllers;

use App\Models\Location;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Models\Category;

class LocationController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Lokasyon';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Location());

        $grid->column('id', __('admin.id'));
        $grid->column('departmant', __('admin.departmant'));
        $grid->column('country', __('admin.country'));
        $grid->column('address', __('admin.address'));
        $grid->column('phone', __('admin.phone'));
        $grid->column('mail', __('admin.mail'));
        $grid->column('created_at', __('Created at'));
        $grid->column('updated_at', __('Updated at'));

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
        $show = new Show(Location::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('departmant', __('admin.departmant'));
        $show->field('country', __('admin.country'));
        $show->field('address', __('admin.address'));
        $show->field('phone', __('admin.phone'));
        $show->field('mail', __('admin.mail'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Location());
        $form->text('departmant', __('admin.departmant'));
        $form->text('country', __('admin.country'));
        $form->text('address', __('admin.address'));
        $form->text('phone', __('admin.phone'));
        $form->text('mail', __('admin.mail'));

        return $form;
    }
}
