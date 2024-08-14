<?php declare (strict_types = 1);

namespace GutenbergBlocks;

use GutenbergBlocks\Blocks\BlocksServiceProvider;
use GutenbergBlocks\GutenbergBlocksServiceProvider;
use GutenbergBlocks\Post\Post;
use GutenbergBlocks\Post\Document;
use Tools\Core\ApplicationInterface;
use Tools\Core\Container\Adapter\ContainerAdapterInterface;

class GutenbergBlocks implements ApplicationInterface
{
    /**
     * DIC Container.
     *
     * @var ContainerAdapterInterface
     */
    private $container;

    public function __construct(ContainerAdapterInterface $container)
    {
        require_once('helpers.php');

        $this->container = $container;

        $this->container->addServiceProvider(new BlocksServiceProvider());
        $this->container->addServiceProvider(new GutenbergBlocksServiceProvider());
    }

    /**
     * Get app service from container.
     *
     * @param string $id Service's id.
     * @param bool $new Get new instance.
     *
     * @return mixed
     */
    public function get($id, $new = false)
    {
        try {
            return $this->container->get($id, $new);
        } catch (NotFoundException $e) {
            return;
        }
    }

    /**
     * Get post instance
     * 
     * @return Post
     */
    public function post()
    {
        return $this->get('Gutenbergblocks.post');
    }

    /**
     * Get document instance
     * 
     * @return Document
     */
    public function document()
    {
        return $this->get('Gutenbergblocks.document');
    }
}