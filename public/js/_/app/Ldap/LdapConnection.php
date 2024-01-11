<?php

namespace App\Ldap;

use App\Models\User;

abstract class LdapConnection
{
    abstract public function authenticate(string $user, string $password);

    protected function findOrCreate(string $name, string $email, string $guid): ?User
    {
        if ($existingUser = User::whereGuid($guid)->first()) {
            $existingUser->name = $name;
            $existingUser->email = $email;
            $existingUser->guid = $guid;
            $existingUser->save();
            $existingUser->refresh();
            return $existingUser;
        }
        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->guid = $guid;
        $user->password = '';
        $user->save();
        return $user;
    }
}
