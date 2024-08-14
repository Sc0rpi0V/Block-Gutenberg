<?php declare (strict_types = 1);

namespace GutenbergBlocks\Gutenberg;

use WP_Block_Editor_Context;

class Categories
{
   /**
     * CONSTRUCTOR
     * 
     * @return void
     */
    public function __construct()
    {
        add_filter('block_categories_all', [$this, 'blockCategoriesAll'], 10, 2);
    }

    /**
     * Add custom category to Gutenberg blocks categories
     * 
     * @param array $cats Native categories list
     * @param WP_Block_Editor_Context Current block editor context
     * 
     * @return array
     */
    public function blockCategoriesAll($cats, $blockEditorContext)
    {
        $newCat = [
            [
                'slug' => 'Gutenberg-block',
                'title' => __('GUTENBERG blocks', 'Gutenberg-back')
            ]
        ];

        return array_merge(
            $newCat,
            $cats
        );
    }
}