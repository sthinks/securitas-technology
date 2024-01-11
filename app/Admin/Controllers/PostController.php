<?php

namespace App\Admin\Controllers;

use App\Enums\PostStatus;
use App\Models\Category;
use App\Models\Post;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;
use Illuminate\Support\Facades\Auth;

class PostController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Blog';

    /**
     *
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid(): Grid
    {
        $grid = new Grid(new Post());

        $grid->column('id', __('admin.id'));
        $grid->column('title', __('admin.title'));
        $grid->column('excerpt', __('admin.excerpt'));
        $grid->column('body', __('admin.body'));
        $grid->column('image', __('admin.image'));
        $grid->column('meta_description', __('admin.meta_description'));
        $grid->column('meta_keywords', __('admin.meta_keywords'));
        $grid->column('status', __('admin.status'));
        $grid->column('featured', __('admin.featured'));
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
        $show = new Show(Post::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('title', __('admin.title'));
        $show->field('excerpt', __('admin.excerpt'));
        $show->field('body', __('admin.body'));
        $show->field('image', __('admin.image'));
        $show->field('meta_description', __('admin.meta_description'));
        $show->field('meta_keywords', __('admin.meta_keywords'));
        $show->field('status', __('admin.status'));
        $show->field('featured', __('admin.featured'));
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
        $form = new Form(new Post());
        $form->multipleSelect('categories','Category')->options(Category::all()->pluck('title','id'));
        $form->text('title', __('admin.title'));
        $form->textarea('excerpt', __('admin.excerpt'));
        $form->ckeditor('body', __('admin.body'));
        $form->image('image', __('admin.image'))->thumbnail([
            'small' => [100, 100],
            'medium' => [200, 200],
            'large' => [300, 300],
        ]);
        $form->textarea('meta_description', __('admin.meta_description'));
        $form->textarea('meta_keywords', __('admin.meta_keywords'));
        $form->select('status', __('admin.status'))
            ->options(PostStatus::asSelectArray())
            ->default(PostStatus::DRAFT);
        $form->switch('featured', __('admin.featured'));
        $form->hidden('author_id');
        $form->saving(function (Form $form) {
            $form->author_id = Auth::id();
        });
        return $form;
    }
}
