<?php declare(strict_types=1);

namespace GutenbergBlocks\Blocks;

class Registered
{
    /**
     * CONSTRUCTOR
     * 
     * @reutn void
     */
    public function __construct()
    {
        add_action('init', [$this, 'init']);
    }

    /**
     * Register block 
     * 
     * @return void 
     */
    public function init()
    {
        // use for load override core blocks
        register_block_type(BUILD . '/abstract-block'); 

        register_block_type(BUILD . '/cta-list');
        register_block_type(BUILD . '/highlight-content');
        register_block_type(BUILD . '/highlight-title');
        register_block_type(BUILD . '/highlight-pdf');
        register_block_type(BUILD . '/join-us');
        register_block_type(BUILD . '/key-figures');
        register_block_type(BUILD . '/presence-world');
        register_block_type(BUILD . '/chapo');
        register_block_type(BUILD . '/separator');
        register_block_type(BUILD . '/hero-img-title');
        register_block_type(BUILD . '/hero-text');
        register_block_type(BUILD . '/text-icon-sep');
        register_block_type(BUILD . '/image-card');
        register_block_type(BUILD . '/button-link');
        register_block_type(BUILD . '/buttons');
        register_block_type(BUILD . '/framed');
        register_block_type(BUILD . '/media-text');
        register_block_type(BUILD . '/media-text-wrapped');
        register_block_type(BUILD . '/image');
        register_block_type(BUILD . '/images');
        register_block_type(BUILD . '/pdf-chapters');
        register_block_type(BUILD . '/quote');
        register_block_type(BUILD . '/cta-img-content');
        register_block_type(BUILD . '/faq');
        register_block_type(BUILD . '/cols-content');
        register_block_type(BUILD . '/texts-cloud');
        register_block_type(BUILD . '/social-links');
        register_block_type(BUILD . '/blue-cards');
        register_block_type(BUILD . '/content-card');
        register_block_type(BUILD . '/cross-linking');
        register_block_type(BUILD . '/intro-shape');
        register_block_type(BUILD . '/framed-list');
        register_block_type(BUILD . '/video-iframe');

        register_block_type(BUILD . '/row-pages');
        register_block_type(BUILD . '/related-publications');
        register_block_type(BUILD . '/related-posts');
        register_block_type(BUILD . '/related-use-case');
        register_block_type(BUILD . '/related-jobs');
        register_block_type(BUILD . '/related-subsidiary');
        register_block_type(BUILD . '/cards-list');
    }
}