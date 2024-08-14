<?php declare (strict_types = 1);

namespace GutenbergBlocks\Blocks\Override\Yoast;

use WP_Block;

class Breadcrumb
{
    /**
     * CONSTRUCTOR
     * 
     * @return void
     */
    public function __construct()
    {
        add_filter('render_block', [$this, 'overrideBreadcrumb'], 10, 3);
    }

    /**
     * Override Yoast breadcrumb block render 
     * 
     * @param string $blockContent
     * @param array $block
     * @param WP_Block $instance
     * 
     * @return string 
     */
    public function overrideBreadcrumb($blockContent, $block, $instance)
    {
        if($block['blockName'] === 'yoast-seo/breadcrumbs' && is_front_page()){
            return '';
        }

        return $blockContent;
    }
}