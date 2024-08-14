<?php declare (strict_types = 1);

namespace GutenbergBlocks\Blocks;

use WP_Block_Editor_Context;

class AvailableBlocks
{
    /**
     * CONSTRUCTOR
     * 
     * @return void
     */
    public function __construct()
    {
        add_filter( 'allowed_block_types_all', [$this, 'allowedBlockTypesAll'], 10, 2 );
    }

    /**
     * Add or remove native or custom block into editor (uncomment to add native block)
     * 
     * @see https://developer.wordpress.org/reference/hooks/allowed_block_types_all/
     * @see https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src
     * 
     * @param array|string|bool $allowedBlocksTypes
     * @param WP_Block_Editor_Context $blockEditorContext block editor context
     * 
     * @return array
     */
    public function allowedBlockTypesAll($allowedBlocksTypes, $blockEditorContext)
    {
        return [
            // GUTENBERG Blocks
            'Gutenberg/cta-list',
            'Gutenberg/highlight-content',
            'Gutenberg/highlight-title',
            'Gutenberg/highlight-pdf',
            'Gutenberg/join-us',
            'Gutenberg/key-figures',
            'Gutenberg/presence-world',
            'Gutenberg/chapo',
            'Gutenberg/separator',
            'Gutenberg/hero-img-title',
            'Gutenberg/text-icon-sep',
            'Gutenberg/image-card',
            'Gutenberg/button-link',
            'Gutenberg/buttons',
            'Gutenberg/framed',
            'Gutenberg/media-text',
            'Gutenberg/media-text-wrapped',
            'Gutenberg/image',
            'Gutenberg/images',
            'Gutenberg/pdf-chapters',
            'Gutenberg/quote',
            'Gutenberg/cta-img-content',
            'Gutenberg/faq',
            'Gutenberg/cols-content',
            'Gutenberg/texts-cloud',
            'Gutenberg/social-links',
            'Gutenberg/video-iframe',
            'Gutenberg/blue-cards',
            'Gutenberg/content-card',
            'Gutenberg/cross-linking',
            'Gutenberg/hero-text',
            'Gutenberg/intro-shape',
            'Gutenberg/row-pages',
            'Gutenberg/framed-list',

            'Gutenberg/related-publications',
            'Gutenberg/related-posts',
            'Gutenberg/related-use-case',
            'Gutenberg/related-jobs',
            'Gutenberg/related-subsidiary',
            'Gutenberg/cards-list',

            // PLUGIN BLOCKS
            //'yoast-seo/breadcrumbs',

            // TEXT CAT
            'core/paragraph',
            'core/heading',
            'core/list',
            'core/list-item',
            //'core/preformatted',
            //'core/pullquote',
            //'core/table',
            //'core/verse',
    
            // MEDIA CAT
            //'core/image',
            //'core/gallery',
            //'core/audio',
            //'core/cover',
            //'core/file',
            //'core/media-text',
            //'core/video',
    
            // DESIGN CAT
            //'core/buttons',
            //'core/columns',
            //'core/group',
            //'core/row',
            //'core/stack',
            //'core/more',
            //'core/nextpage',
            //'core/separator',
            'core/spacer',

            // WIDGET CAT
            //'core/archives',
            //'core/calendar',
            //'core/categories',
            //'core/html',
            //'core/latest-comments',
            //'core/latest-posts',
            //'core/page-list',
            //'core/rss',
            //'core/search',
            //'core/shortcode',
            //'core/social-links',
            //'core/tag-cloud',

            // THEME CAT
            //'core/navigation',
            //'core/site-logo',
            //'core/site-title',
            //'core/site-tagline',
            //'core/query',
            //'core/posts-list',
            //'core/avatar',
            //'core/post-title',
            //'core/post-excerpt',
            //'core/post-featured-image',
            //'core/post-content',
            //'core/post-author',
            //'core/post-date',
            //'core/post-terms',
            //'core/post-navigation-link',
            //'core/read-more',
            //'core/comments-query-loop',
            //'core/post-comments-form',
            //'core/loginout',
            //'core/term-description',
            //'core/query-title',
            //'core/post-author-biography',

            // EMBEDS CAT
            //'core/embed',
        ];
    }
}