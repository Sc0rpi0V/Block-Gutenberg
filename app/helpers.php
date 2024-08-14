<?php 

use GutenbergBlocks\GutenbergBlocks;

if (!function_exists('Gutenbergblocks')) {
    /**
     * Get GutenbergBlocks instance.
     *
     * @return GutenbergBlocks
     */
    function Gutenbergblocks(): GutenbergBlocks
    {
        return app('Gutenbergblocks', false);
    }
}