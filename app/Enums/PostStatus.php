<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static PUBLISHED()
 * @method static static DRAFT()
 * @method static static PENDING()
 */
final class PostStatus extends Enum
{
    const PUBLISHED =   'PUBLISHED';
    const DRAFT =   'DRAFT';
    const PENDING = 'PENDING';
}
