<?php

namespace App\Admin\Controllers;

use App\Admin\Selectable\CategorySelect;
use App\Models\Category;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Encore\Admin\Facades\Admin;

class CategoryController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Kategori';

    public function index(Content $content): Content
    {
        return Admin::content(function (Content $content) {
            $content->header('Kategori yönetimi');
            $content->body(Category::tree());
        });
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id): Show
    {
        $show = new Show(Category::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('parent_id', __('admin.parent_id'));
        $show->field('title', __('admin.title'));
        $show->field('excerpt', __('admin.excerpt'));
        $show->field('order', __('admin.order'));
        $show->field('body', __('admin.body'));
        $show->field('meta_description', __('admin.meta_description'));
        $show->field('meta_keywords', __('admin.meta_keywords'));
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
    protected function form(): Form
    {
        $form = new Form(new Category());
        $form->belongsTo('parent_id', CategorySelect::class,__('admin.parent_id'));
        $form->text('title', __('admin.title'));
        $form->text('slug', __('admin.slug'));
        $form->text('excerpt', __('admin.excerpt'));
        $form->ckeditor('body', __('admin.body'));
        $form->text('meta_description', __('admin.meta_description'));
        $form->text('meta_keywords', __('admin.meta_keywords'));
        $form->list('videos', __('admin.videos'))->max(3);
        $form->image('image', __('admin.image'))->thumbnail([
            'small' => [100, 100],
            'medium' => [200, 200],
            'large' => [300, 300],
        ]);
        $form->image('banner', __('admin.banner'))->thumbnail([
            'small' => [100, 100],
            'medium' => [200, 200],
            'large' => [300, 300],
        ]);
        $form->switch('status', __('admin.status'))->default(1);

        $form->morphMany('attachments', function (Form\NestedForm $form) {
            $form->text('title', __('admin.title'));
            $form->file('file', __('admin.file'));
           $form->image('image', __('admin.image'));
        });
        $form->saved(function (Form $form) {
            \Artisan::call('cache:clear');
        });
        return $form;
    }
}
