<?php declare(strict_types=1);

namespace GutenbergBlocks\Blocks;

class BlockTemplate
{
    /**
     * CONSTRUCTOR
     * 
     * @return void
     */
    public function __construct()
    {
        add_action('init', [$this, 'init'], 11);
    }

    /**
     * Set base block template for post type
     * 
     * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-templates/
     * 
     * @return void
     */
    public function init()
    {
        $ctps = [
            'post',
            'page',
            'job',
            'magazine',
            'subsidiary',
            'news'
        ];

        foreach($ctps as $ctp) {
            $postTypeObject = get_post_type_object($ctp);

            $postTypeObject->template = [
                ['Gutenberg/hero-img-title']
            ];
        }
    }
}