<?php

namespace App\Admin\Controllers;

use App\Models\File;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use App\Utils\UrlHelper;

class FileController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Dosya Paylaşımı';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new File());
        $grid->column('title', __('admin.title'));
        $grid->column('file', __('admin.file'))->display(function ($file) {
            return "<a target='_blank' href='" . UrlHelper::getFileFromStorage($file) . "'>Dosyayı indir</a>";
        });
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
        $show = new Show(File::findOrFail($id));
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
        $form = new Form(new File());
        $form->text('title', __('admin.title'));
        $form->file('file', __('admin.file'))
        ->rules('mimes:doc,docx,xlsx,pdf,zip,rar,jpg,jpeg,png,gif')
        ->help("izin verilen uzantıler: doc,docx,xlsx,pdf,zip,rar,jpg,jpeg,png,gif");
        return $form;
    }
}
