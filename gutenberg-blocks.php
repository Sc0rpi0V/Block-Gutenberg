<?php
/**
 * Plugin Name:       Gutenberg Blocks
 * Description:       Gutenberg blocks for Theme
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       back
 *
 * @package           
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
if( ! defined( 'ABSPATH' ) ) exit;

define('BUILD_URL', plugin_dir_url(__FILE__) . '/build');
define('ASSETS_URL', plugin_dir_url(__FILE__) . 'assets');
define('SRC_URL', plugin_dir_url(__FILE__) . 'src');
define('BUILD', __DIR__ . '/build');
define('GUTENBERG_BLOCKS_VERSION', '0.1.0');

use GutenbergBlocks\GutenbergBlocks;

tools()->registerApp(
    'Gutenbergblocks',
    [
        'autoload' => [
            'psr-4' => [
                'GutenbergBlocks\\' => __DIR__ . '/app',
            ],
        ],
        'services' => [
            [
                'class' => GutenbergBlocks::class,
                'load'  => true,
            ],
        ],
    ]
);
