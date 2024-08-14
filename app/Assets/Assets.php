<?php declare(strict_types=1);

namespace GutenbergBlocks\Assets;

class Assets
{
    /**
     * CONSTRUCTOR
     * 
     * @return void
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', [$this, 'adminEnqueue']);
    }

    /**
     * Register script on admin side 
     * 
     * @return void
     */
    public function adminEnqueue()
    {
        wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap', [], GUTENBERG_BLOCKS_VERSION);
    }
}