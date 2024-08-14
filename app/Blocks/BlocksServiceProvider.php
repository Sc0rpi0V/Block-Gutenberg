<?php

declare(strict_types=1);

namespace GutenbergBlocks\Blocks;

use GutenbergBlocks\Blocks\AvailableBlocks;
use GutenbergBlocks\Blocks\BlockTemplate;
use GutenbergBlocks\Blocks\Registered;
use GutenbergBlocks\Blocks\Override\Yoast\Breadcrumb;
use League\Container\ServiceProvider\AbstractServiceProvider;
use League\Container\ServiceProvider\BootableServiceProviderInterface;

class BlocksServiceProvider extends AbstractServiceProvider implements BootableServiceProviderInterface
{
    /**
     * {@inheritdoc}
     */
    protected $provides = [
        'Gutenbergblocks.blocks.available_blocks',
        'Gutenbergblocks.blocks.block_template',
        'Gutenbergblocks.blocks.registered',
        'Gutenbergblocks.blocks.override.yoast.breadcrumb',
    ];

    /**
     * {@inheritdoc}
     */
    public function boot()
    {
        $this->getContainer()->share('Gutenbergblocks.blocks.registered', Registered::class);
        $this->getContainer()->share('Gutenbergblocks.blocks.available_blocks', AvailableBlocks::class);
        $this->getContainer()->share('Gutenbergblocks.blocks.block_template', BlockTemplate::class);
        $this->getContainer()->share('Gutenbergblocks.blocks.override.yoast.breadcrumb', Breadcrumb::class);

        $this->getContainer()->get('Gutenbergblocks.blocks.registered');
        $this->getContainer()->get('Gutenbergblocks.blocks.block_template');
        $this->getContainer()->get('Gutenbergblocks.blocks.available_blocks');
        $this->getContainer()->get('Gutenbergblocks.blocks.override.yoast.breadcrumb');
    }

     /**
     * {@inheritdoc}
     */
    public function register()
    {
    }
}