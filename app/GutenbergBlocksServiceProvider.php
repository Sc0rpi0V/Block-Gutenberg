<?php

declare(strict_types=1);

namespace GutenbergBlocks;

use GutenbergBlocks\Assets\Assets;
use GutenbergBlocks\Gutenberg\Categories;
use GutenbergBlocks\Post\Post;
use GutenbergBlocks\Post\Document;
use League\Container\ServiceProvider\AbstractServiceProvider;
use League\Container\ServiceProvider\BootableServiceProviderInterface;

class GutenbergBlocksServiceProvider extends AbstractServiceProvider implements BootableServiceProviderInterface
{
    /**
     * {@inheritdoc}
     */
    protected $provides = [
        'Gutenbergblocks.assets',
        'Gutenbergblocks.gutenberg.categories',
        'Gutenbergblocks.post',
        'Gutenbergblocks.document'
    ];

    /**
     * {@inheritdoc}
     */
    public function boot()
    {
        $this->getContainer()->share('Gutenbergblocks.assets', Assets::class);
        $this->getContainer()->share('Gutenbergblocks.gutenberg.categories', Categories::class);
        $this->getContainer()->share('Gutenbergblocks.post', Post::class);
        $this->getContainer()->share('Gutenbergblocks.document', Document::class);

        //$this->getContainer()->get('Gutenbergblocks.assets');
        $this->getContainer()->get('Gutenbergblocks.gutenberg.categories');
        $this->getContainer()->get('Gutenbergblocks.post');
        $this->getContainer()->get('Gutenbergblocks.document');
    }

     /**
     * {@inheritdoc}
     */
    public function register()
    {
    }
}