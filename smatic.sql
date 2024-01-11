-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 25 Ağu 2022, 12:27:48
-- Sunucu sürümü: 10.4.18-MariaDB
-- PHP Sürümü: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `smatic`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `activity_log`
--

CREATE TABLE `activity_log` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `log_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject_id` bigint(20) UNSIGNED DEFAULT NULL,
  `causer_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `causer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`properties`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `activity_log`
--

INSERT INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `subject_id`, `causer_type`, `causer_id`, `properties`, `created_at`, `updated_at`) VALUES
(1, 'default', 'created', 'App\\Models\\Category', 1, NULL, NULL, '[]', '2022-08-17 04:38:32', '2022-08-17 04:38:32'),
(2, 'default', 'created', 'App\\Models\\Category', 2, 'Encore\\Admin\\Auth\\Database\\Administrator', 1, '[]', '2022-08-17 04:40:04', '2022-08-17 04:40:04');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_menu`
--

CREATE TABLE `admin_menu` (
  `id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `order` int(11) NOT NULL DEFAULT 0,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uri` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permission` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_menu`
--

INSERT INTO `admin_menu` (`id`, `parent_id`, `order`, `title`, `icon`, `uri`, `permission`, `created_at`, `updated_at`) VALUES
(1, 0, 1, 'Dashboard', 'fa-bar-chart', '/', NULL, NULL, NULL),
(2, 0, 2, 'Admin', 'fa-tasks', '', NULL, NULL, NULL),
(3, 2, 3, 'Users', 'fa-users', 'auth/users', NULL, NULL, NULL),
(4, 2, 4, 'Roles', 'fa-user', 'auth/roles', NULL, NULL, NULL),
(5, 2, 5, 'Permission', 'fa-ban', 'auth/permissions', NULL, NULL, NULL),
(6, 2, 6, 'Menu', 'fa-bars', 'auth/menu', NULL, NULL, NULL),
(7, 2, 7, 'Operation log', 'fa-history', 'auth/logs', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_operation_log`
--

CREATE TABLE `admin_operation_log` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `method` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `input` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_operation_log`
--

INSERT INTO `admin_operation_log` (`id`, `user_id`, `path`, `method`, `ip`, `input`, `created_at`, `updated_at`) VALUES
(1, 1, 'admin', 'GET', '127.0.0.1', '[]', '2022-08-15 09:07:28', '2022-08-15 09:07:28'),
(2, 1, 'admin/categories', 'GET', '127.0.0.1', '[]', '2022-08-15 09:08:00', '2022-08-15 09:08:00'),
(3, 1, 'admin/categories/create', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-15 09:08:13', '2022-08-15 09:08:13'),
(4, 1, 'admin/categories', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-15 09:08:14', '2022-08-15 09:08:14'),
(5, 1, 'admin/categories', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-15 09:42:39', '2022-08-15 09:42:39'),
(6, 1, 'admin', 'GET', '127.0.0.1', '[]', '2022-08-17 04:34:41', '2022-08-17 04:34:41'),
(7, 1, 'admin/categories', 'GET', '127.0.0.1', '[]', '2022-08-17 04:35:25', '2022-08-17 04:35:25'),
(8, 1, 'admin/categories/create', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:35:27', '2022-08-17 04:35:27'),
(9, 1, 'admin/_handle_selectable_', 'GET', '127.0.0.1', '{\"selectable\":\"App_Admin_Selectable_CategorySelect\",\"args\":[\"0\"]}', '2022-08-17 04:35:31', '2022-08-17 04:35:31'),
(10, 1, 'admin/categories', 'POST', '127.0.0.1', '{\"parent_id\":null,\"title\":\"Anasayfa\",\"excerpt\":\"Anasayfaya ho\\u015fgeldiniz\",\"body\":\"<p>Anasayfaya ho\\u015fgeldiniz<\\/p>\",\"meta_description\":\"desc\",\"meta_keywords\":\"keywords\",\"status\":\"on\",\"_token\":\"GxRdkg3fqiBj0SEfS6ZKEASoSDmVPSggL3cLsKen\",\"_previous_\":\"http:\\/\\/127.0.0.1:8000\\/admin\\/categories\"}', '2022-08-17 04:36:01', '2022-08-17 04:36:01'),
(11, 1, 'admin/categories/create', 'GET', '127.0.0.1', '[]', '2022-08-17 04:36:02', '2022-08-17 04:36:02'),
(12, 1, 'admin/_handle_selectable_', 'GET', '127.0.0.1', '{\"selectable\":\"App_Admin_Selectable_CategorySelect\",\"args\":[\"0\"]}', '2022-08-17 04:36:14', '2022-08-17 04:36:14'),
(13, 1, 'admin/categories', 'POST', '127.0.0.1', '{\"parent_id\":null,\"title\":\"Anasayfa\",\"excerpt\":\"Anasayfaya ho\\u015fgeldiniz\",\"body\":\"<p>Anasayfaya ho\\u015fgeldiniz<\\/p>\",\"meta_description\":\"desc\",\"meta_keywords\":\"keywords\",\"status\":\"on\",\"_token\":\"GxRdkg3fqiBj0SEfS6ZKEASoSDmVPSggL3cLsKen\"}', '2022-08-17 04:36:19', '2022-08-17 04:36:19'),
(14, 1, 'admin/categories/create', 'GET', '127.0.0.1', '[]', '2022-08-17 04:36:19', '2022-08-17 04:36:19'),
(15, 1, 'admin/_handle_selectable_', 'GET', '127.0.0.1', '{\"selectable\":\"App_Admin_Selectable_CategorySelect\",\"args\":[\"0\"]}', '2022-08-17 04:36:26', '2022-08-17 04:36:26'),
(16, 1, 'admin/categories/create', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:36:39', '2022-08-17 04:36:39'),
(17, 1, 'admin/categories/create', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:36:41', '2022-08-17 04:36:41'),
(18, 1, 'admin/references/create', 'GET', '127.0.0.1', '[]', '2022-08-17 04:38:07', '2022-08-17 04:38:07'),
(19, 1, 'admin/categories/create', 'GET', '127.0.0.1', '[]', '2022-08-17 04:38:15', '2022-08-17 04:38:15'),
(20, 1, 'admin/categories', 'GET', '127.0.0.1', '[]', '2022-08-17 04:38:18', '2022-08-17 04:38:18'),
(21, 1, 'admin/categories', 'GET', '127.0.0.1', '[]', '2022-08-17 04:38:37', '2022-08-17 04:38:37'),
(22, 1, 'admin/categories/create', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:38:41', '2022-08-17 04:38:41'),
(23, 1, 'admin/_handle_selectable_', 'GET', '127.0.0.1', '{\"selectable\":\"App_Admin_Selectable_CategorySelect\",\"args\":[\"0\"]}', '2022-08-17 04:38:43', '2022-08-17 04:38:43'),
(24, 1, 'admin/categories', 'POST', '127.0.0.1', '{\"parent_id\":\"1\",\"title\":\"\\u00c7\\u00f6z\\u00fcmler\",\"excerpt\":\"\\u00c7\\u00f6z\\u00fcmler sayfas\\u0131\",\"body\":\"<p>&Ccedil;&ouml;z&uuml;mlerle ilgili detaylar<\\/p>\",\"meta_description\":\"\\u00c7\\u00f6z\\u00fcmler\",\"meta_keywords\":\"\\u00c7\\u00f6z\\u00fcmler\",\"status\":\"on\",\"_token\":\"GxRdkg3fqiBj0SEfS6ZKEASoSDmVPSggL3cLsKen\",\"after-save\":\"3\",\"_previous_\":\"http:\\/\\/127.0.0.1:8000\\/admin\\/categories\\/\"}', '2022-08-17 04:40:01', '2022-08-17 04:40:01'),
(25, 1, 'admin/categories/2', 'GET', '127.0.0.1', '[]', '2022-08-17 04:40:04', '2022-08-17 04:40:04'),
(26, 1, 'admin', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:40:21', '2022-08-17 04:40:21'),
(27, 1, 'admin/categories/2', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:40:40', '2022-08-17 04:40:40'),
(28, 1, 'admin/categories', 'GET', '127.0.0.1', '[]', '2022-08-17 04:40:42', '2022-08-17 04:40:42'),
(29, 1, 'admin/references', 'GET', '127.0.0.1', '[]', '2022-08-17 04:41:51', '2022-08-17 04:41:51'),
(30, 1, 'admin/references/create', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-17 04:41:52', '2022-08-17 04:41:52'),
(31, 1, 'admin', 'GET', '127.0.0.1', '[]', '2022-08-24 05:58:20', '2022-08-24 05:58:20'),
(32, 1, 'admin/auth/users', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 05:58:26', '2022-08-24 05:58:26'),
(33, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 05:58:29', '2022-08-24 05:58:29'),
(34, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\",\"_previous_\":\"http:\\/\\/127.0.0.1:8000\\/admin\\/auth\\/users\"}', '2022-08-24 05:58:32', '2022-08-24 05:58:32'),
(35, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 05:58:32', '2022-08-24 05:58:32'),
(36, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 05:58:50', '2022-08-24 05:58:50'),
(37, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\",\"_previous_\":\"http:\\/\\/127.0.0.1:8000\\/admin\\/auth\\/users\"}', '2022-08-24 05:58:52', '2022-08-24 05:58:52'),
(38, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 05:58:52', '2022-08-24 05:58:52'),
(39, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 06:01:00', '2022-08-24 06:01:00'),
(40, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\",\"_previous_\":\"http:\\/\\/127.0.0.1:8000\\/admin\\/auth\\/users\"}', '2022-08-24 06:01:02', '2022-08-24 06:01:02'),
(41, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 06:01:02', '2022-08-24 06:01:02'),
(42, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 06:01:22', '2022-08-24 06:01:22'),
(43, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\",\"_previous_\":\"http:\\/\\/127.0.0.1:8000\\/admin\\/auth\\/users\"}', '2022-08-24 06:01:23', '2022-08-24 06:01:23'),
(44, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 06:01:23', '2022-08-24 06:01:23'),
(45, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 06:03:03', '2022-08-24 06:03:03'),
(46, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\"}', '2022-08-24 06:03:05', '2022-08-24 06:03:05'),
(47, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 06:03:05', '2022-08-24 06:03:05'),
(48, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '{\"_pjax\":\"#pjax-container\"}', '2022-08-24 06:03:16', '2022-08-24 06:03:16'),
(49, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\"}', '2022-08-24 06:03:17', '2022-08-24 06:03:17'),
(50, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 06:03:17', '2022-08-24 06:03:17'),
(51, 1, 'admin/auth/users/1/edit', 'GET', '127.0.0.1', '[]', '2022-08-24 06:22:00', '2022-08-24 06:22:00'),
(52, 1, 'admin/auth/users/1', 'PUT', '127.0.0.1', '{\"username\":\"admin\",\"name\":\"Administrator\",\"password\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"password_confirmation\":\"$2y$10$e\\/uZSbJ7DnEfhwX\\/7tn3cOhIQTLQxyqBxD.\\/SjfL6BkjjZAmKxiiK\",\"roles\":[\"1\",null],\"permissions\":[null],\"_token\":\"K08d9oInCfJecSqQ4z43tnJQsFoHu2mXoG2JsVqK\",\"_method\":\"PUT\"}', '2022-08-24 06:22:02', '2022-08-24 06:22:02'),
(53, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 06:22:03', '2022-08-24 06:22:03'),
(54, 1, 'admin/auth/users', 'GET', '127.0.0.1', '[]', '2022-08-24 08:54:52', '2022-08-24 08:54:52');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_permissions`
--

CREATE TABLE `admin_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `http_method` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `http_path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_permissions`
--

INSERT INTO `admin_permissions` (`id`, `name`, `slug`, `http_method`, `http_path`, `created_at`, `updated_at`) VALUES
(1, 'All permission', '*', '', '*', NULL, NULL),
(2, 'Dashboard', 'dashboard', 'GET', '/', NULL, NULL),
(3, 'Login', 'auth.login', '', '/auth/login\r\n/auth/logout', NULL, NULL),
(4, 'User setting', 'auth.setting', 'GET,PUT', '/auth/setting', NULL, NULL),
(5, 'Auth management', 'auth.management', '', '/auth/roles\r\n/auth/permissions\r\n/auth/menu\r\n/auth/logs', NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_roles`
--

CREATE TABLE `admin_roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_roles`
--

INSERT INTO `admin_roles` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Administrator', 'administrator', '2022-08-15 09:07:04', '2022-08-15 09:07:04');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_role_menu`
--

CREATE TABLE `admin_role_menu` (
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_role_menu`
--

INSERT INTO `admin_role_menu` (`role_id`, `menu_id`, `created_at`, `updated_at`) VALUES
(1, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_role_permissions`
--

CREATE TABLE `admin_role_permissions` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_role_permissions`
--

INSERT INTO `admin_role_permissions` (`role_id`, `permission_id`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_role_users`
--

CREATE TABLE `admin_role_users` (
  `role_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_role_users`
--

INSERT INTO `admin_role_users` (`role_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `admin_users`
--

INSERT INTO `admin_users` (`id`, `username`, `password`, `name`, `avatar`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', '$2y$10$e/uZSbJ7DnEfhwX/7tn3cOhIQTLQxyqBxD./SjfL6BkjjZAmKxiiK', 'Administrator', NULL, 'cX5QeXa7VTPemp2BP7NFJjisbBspGa7neQlWml3996jCqSsTXVSAEPSHFKyx', '2022-08-15 09:07:04', '2022-08-15 09:07:04');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `admin_user_permissions`
--

CREATE TABLE `admin_user_permissions` (
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `attachments`
--

CREATE TABLE `attachments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachmentable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attachmentable_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int(11) DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `title`, `order`, `excerpt`, `body`, `meta_description`, `meta_keywords`, `image`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Anasayfa', NULL, NULL, NULL, NULL, NULL, NULL, 'anasayfa', 1, '2022-08-17 04:38:32', '2022-08-17 04:38:32'),
(2, 1, 'Çözümler', NULL, 'Çözümler sayfası', '<p>&Ccedil;&ouml;z&uuml;mlerle ilgili detaylar</p>', 'Çözümler', 'Çözümler', 'images/asfasf.png', 'cozumler', 1, '2022-08-17 04:40:03', '2022-08-17 04:40:03');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `categoryables`
--

CREATE TABLE `categoryables` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `categoryable_id` bigint(20) UNSIGNED NOT NULL,
  `categoryable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Tablo döküm verisi `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_01_04_173148_create_admin_tables', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2022_04_19_091351_create_categories_table', 1),
(6, '2022_04_19_120237_create_categoryables_table', 1),
(7, '2022_04_19_121349_create_references_table', 1),
(8, '2022_04_19_153240_create_attachments_table', 1),
(9, '2022_04_20_074840_create_posts_table', 1),
(10, '2022_04_20_075304_create_activity_log_table', 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author_id` bigint(20) UNSIGNED DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('PUBLISHED','DRAFT','PENDING') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'DRAFT',
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `references`
--

CREATE TABLE `references` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comments` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject` (`subject_type`,`subject_id`),
  ADD KEY `causer` (`causer_type`,`causer_id`),
  ADD KEY `activity_log_log_name_index` (`log_name`);

--
-- Tablo için indeksler `admin_menu`
--
ALTER TABLE `admin_menu`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `admin_operation_log`
--
ALTER TABLE `admin_operation_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_operation_log_user_id_index` (`user_id`);

--
-- Tablo için indeksler `admin_permissions`
--
ALTER TABLE `admin_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_permissions_name_unique` (`name`),
  ADD UNIQUE KEY `admin_permissions_slug_unique` (`slug`);

--
-- Tablo için indeksler `admin_roles`
--
ALTER TABLE `admin_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_roles_name_unique` (`name`),
  ADD UNIQUE KEY `admin_roles_slug_unique` (`slug`);

--
-- Tablo için indeksler `admin_role_menu`
--
ALTER TABLE `admin_role_menu`
  ADD KEY `admin_role_menu_role_id_menu_id_index` (`role_id`,`menu_id`);

--
-- Tablo için indeksler `admin_role_permissions`
--
ALTER TABLE `admin_role_permissions`
  ADD KEY `admin_role_permissions_role_id_permission_id_index` (`role_id`,`permission_id`);

--
-- Tablo için indeksler `admin_role_users`
--
ALTER TABLE `admin_role_users`
  ADD KEY `admin_role_users_role_id_user_id_index` (`role_id`,`user_id`);

--
-- Tablo için indeksler `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_users_username_unique` (`username`);

--
-- Tablo için indeksler `admin_user_permissions`
--
ALTER TABLE `admin_user_permissions`
  ADD KEY `admin_user_permissions_user_id_permission_id_index` (`user_id`,`permission_id`);

--
-- Tablo için indeksler `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attachments_attachmentable_type_attachmentable_id_index` (`attachmentable_type`,`attachmentable_id`);

--
-- Tablo için indeksler `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `categoryables`
--
ALTER TABLE `categoryables`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Tablo için indeksler `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Tablo için indeksler `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `references`
--
ALTER TABLE `references`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `admin_menu`
--
ALTER TABLE `admin_menu`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Tablo için AUTO_INCREMENT değeri `admin_operation_log`
--
ALTER TABLE `admin_operation_log`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Tablo için AUTO_INCREMENT değeri `admin_permissions`
--
ALTER TABLE `admin_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Tablo için AUTO_INCREMENT değeri `admin_roles`
--
ALTER TABLE `admin_roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Tablo için AUTO_INCREMENT değeri `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Tablo için AUTO_INCREMENT değeri `categoryables`
--
ALTER TABLE `categoryables`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Tablo için AUTO_INCREMENT değeri `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `references`
--
ALTER TABLE `references`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
