<?php

namespace App\Admin\Controllers;

use App\Models\Contact;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class ContactController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'İletişim formları';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Contact());
        $grid->export(function ($export) {

            $export->filename('contact');
        
        
            $export->only(['name', 'message', 'mail', 'city', 'phone','created_at']);
            $export->column('message', function ($value, $original) {
                return \Illuminate\Support\Str::words(($value), $limit = 50, $end = '...');
            });
        
        });
        $grid->column('id', __('admin.id'));
        $grid->column('name', __('admin.name'));
        $grid->column('mail', __('admin.mail'));
        $grid->column('city', __('admin.city'));
        $grid->column('message', __('admin.message'));
        $grid->column('gdpr', __('admin.gdpr'));
        $grid->column('ip', __('admin.ip'));
        $grid->column('fullurl', "doldurulduğu url");
        $grid->column('user_agent', __('admin.user_agent'));
        $grid->column('created_at', __('admin.created_at'));
        $grid->column('updated_at', __('admin.updated_at'));
        $grid->column('phone',__('admin.phone'));

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
        $show = new Show(Contact::findOrFail($id));

        $show->field('id', __('admin.id'));
        $show->field('name', __('admin.name'));
        $show->field('mail', __('admin.mail'));
        $show->field('city', __('admin.city'));
        $show->field('message', __('admin.message'));
        $show->field('gdpr', __('admin.gdpr'));
        $show->field('ip', __('admin.ip'));
        $show->field('user_agent', __('admin.user_agent'));
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
        $form = new Form(new Contact());

        $form->text('name', __('Name'));
        $form->email('mail', __('Mail'));
        $form->text('city', __('City'));
        $form->textarea('message', __('Message'));
        $form->switch('gdpr', __('Gdpr'))->default(1);
        $form->ip('ip', __('Ip'));
        $form->text('user_agent', __('User agent'));

        return $form;
    }
    
}
