<?php

declare(strict_types=1);

namespace GutenbergBlocks\Post;

use GutenbergBlocks\Post\Post;

class Document extends Post
{
    /**
     * {@inheritDoc}
     */
    public function getPermalink( $postId = "")
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        if($fileId = get_field('_document_file_id', $id)) {
            return wp_get_attachment_url($fileId);
        } else {
            return '';
        }
    }

    /**
     * Get file name by id 
     * 
     * @param int|string $id
     * 
     * @return string
     */
    public function getFileName($postId = '')
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        if($fileId = get_field('_document_file_id', $id)) {
            return basename(get_attached_file($fileId));
        } else {
            return '';
        }
    }
}