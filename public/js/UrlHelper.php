<?php
namespace App\Utils;
class UrlHelper
{
    public static function getFileFromStorage($file)
    {
        if(strlen($file) < 1) {
            return null;
        }
        return url('storage/' . $file);
    }
}
