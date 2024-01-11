<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Encore\Admin\Traits\AdminBuilder;
use Encore\Admin\Traits\ModelTree;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\Category
 *
 * @property int $id
 * @property int|null $parent_id
 * @property string $title
 * @property int|null $order
 * @property string|null $description
 * @property string|null $keywords
 * @property string|null $image
 * @property string|null $slug
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read Category|null $parent
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Reference[] $references
 * @property-read int|null $references_count
 * @method static \Illuminate\Database\Eloquent\Builder|Category findSimilarSlugs(string $attribute, array $config, string $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereKeywords($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category withUniqueSlugConstraints(\Illuminate\Database\Eloquent\Model $model, string $attribute, array $config, string $slug)
 * @mixin \Eloquent
 * @property string|null $excerpt
 * @property string|null $body
 * @property string|null $meta_description
 * @property string|null $meta_keywords
 * @property int $status
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Attachment[] $attachments
 * @property-read int|null $attachments_count
 * @property-read \Illuminate\Database\Eloquent\Collection|Category[] $children
 * @property-read int|null $children_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Post[] $posts
 * @property-read int|null $posts_count
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereExcerpt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereMetaDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereMetaKeywords($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Category whereStatus($value)
 */
class Category extends Model
{
    use HasFactory, Sluggable, LogsActivity;
    use ModelTree, AdminBuilder;
    protected $guarded = [];
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
        'videos' => 'json'
    ];
    protected $appends = ['full_url'];


    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->setParentColumn('parent_id');
        $this->setOrderColumn('order');
        $this->setTitleColumn('title');
    }
    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }

    /**
     * Get all the category references.
     */
    public function references(): MorphToMany
    {
        return $this->morphedByMany(Reference::class, 'categoryable');
    }

    /**
     * Get all the category references.
     */
    public function posts(): MorphToMany
    {
        return $this->morphedByMany(Post::class, 'categoryable');
    }

    /**
     * Get all the category products.
     */
    public function products(): MorphToMany
    {
        return $this->morphedByMany(Product::class, 'categoryable');
    }

    /**
     * Get all the category stories.
     */
    public function stories(): MorphToMany
    {
        return $this->morphedByMany(Story::class, 'categoryable');
    }

    /**
     * Get all the category references.
     */
    public function partners(): MorphToMany
    {
        return $this->morphedByMany(Partner::class, 'categoryable');
    }

    /**
     * Get all the category attachments.
     */
    public function attachments(): MorphMany
    {
        return $this->morphMany(Attachment::class, 'attachmentable');
    }

    public function getChildren()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }



    public function getParent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }
    public function buildSlug() {
        $parent = $this->parent();
        $vals = [$this->slug];
        while ($parent) {
            try {
                $vals[] = $parent->get()->first()->slug;
                $parent = $parent->get()->first()->parent();
            } catch(\Exception $e) {
                break;
            }
        }
        array_pop($vals);
        $full_path = array_reverse($vals);
        return implode('/', $full_path);
    }
    public function buildBreadcrumb() {
        $parent = $this->parent();
        $vals[$this->slug] = $this->title;
        while ($parent) {
            try {
                $vals[url(optional($parent->get()->first())->buildSlug())] = $parent->get()->first()->title;
                $parent = $parent->get()->first()->parent();
            } catch(\Exception $e) {
                break;
            }
        }
        $full_path = array_reverse($vals);
        return $full_path;
    }
    public function getFullUrlAttribute()
    {
        return url($this->buildSlug());
    }
}
