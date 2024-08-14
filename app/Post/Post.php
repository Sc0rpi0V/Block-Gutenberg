<?php

declare(strict_types=1);

namespace GutenbergBlocks\Post;

use Illuminate\Support\Str;

class Post
{
    /**
     * Get post title
     * 
     * @param string|int $postId
     * 
     * @return string
     */
    public function getTitle($postId)
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        return get_the_title($id);
    }

    /**
     * Get post permalink
     * 
     * @param string|int $postId
     * 
     * @return string
     */
    public function getPermalink($postId)
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        return get_permalink($id);
    }

    /**
     * Get post excerpt
     * 
     * @param int|string $postId
     * 
     * @return string
     */
    public function getExcerpt($postId)
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        return  Str::limit(get_the_excerpt($id), 200);
    }

    /**
     * Get publication date
     * 
     * @param string|int $postId
     * @param string $format
     * 
     * @return string
     */
    public function getDate($postId, $format = 'j F Y')
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        return date_i18n($format, strtotime(get_the_date('Y-m-d', $id)));
    }

    /**
     * Get post tag
     * 
     * @param int|string $postId
     * 
     * @return array
     */
    public function getTags($postId)
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        return get_the_tags($id);
    }

    /**
     * Get post terms 
     * 
     * @param string|int $postId
     * @param string $taxo
     * 
     * @return array
     */
    public function getTerms($postId, $taxo = '')
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        if ($taxo) {
            return get_the_terms($id, $taxo);
        } else {
            return [];
        }
    }

    /**
     * Get reading time
     * 
     * @param int|string $id
     * @param int $word_per_minute
     * @param bool $with gutenberg editor
     * 
     * @return string
     */
    public function getReadingTime($id = '', $words_per_minute = 250, $with_gutenberg = true)
    {
        if ($id) {
            $content = get_post_field('post_content', $id);
        } else {
            $content = get_post_field('post_content');
        }

        if ($with_gutenberg) {
            $blocks = parse_blocks($content);
            $contentHtml = '';

            foreach ($blocks as $block) {
                $contentHtml .= render_block($block);
            }

            $content = $contentHtml;
        }

        $content = wp_strip_all_tags($content);

        if (!$content) {
            return "";
        }

        $words_count = str_word_count($content);

        $minutes = ceil($words_count / $words_per_minute);

        if ($minutes > 1) {
            return sprintf(__('%s minutes', 'Gutenberg'), $minutes);
        } else {
            return sprintf(__('%s minute', 'Gutenberg'), $minutes);
        }
    }

    /**
     * Get post type name by slug
     * 
     * @param string $slug
     * 
     * @return string
     */
    public function getCptNameBySlug($slug = '')
    {
        $post_type_name = "";

        switch ($slug) {
            case 'post':
                $post_type_name = __('Actualités', 'Gutenberg');
                break;
            case 'page':
                $post_type_name = __('Page', 'Gutenberg');
                break;
            case 'magazine':
                $post_type_name = __('Magazine', 'Gutenberg');
                break;
            case 'job':
                $post_type_name = __('Métier', 'Gutenberg');
                break;
            case 'use_case':
                $post_type_name = __('Références', 'Gutenberg');
                break;
            case 'subsidiary':
                $post_type_name = __('Filiales', 'Gutenberg');
                break;
            case 'news':
                $post_type_name = __('Presse', 'Gutenberg');
                break;
        };

        return $post_type_name;
    }

    /**
     * Get default theme image
     * 
     * @param string $class
     * 
     * @return string
     */
    public function getPlaceholder($class = "")
    {
        $path = '/assets/dist/images/img-placeholder.jpg';
        $exist = file_exists(get_template_directory() . $path);

        if ($exist) {
            return '<img class="' . $class . '" src="' . get_template_directory_uri() . $path . '" alt="' . __('Illustration', 'Gutenberg') . '">';
        } else {
            return '';
        }
    }

    /**
     * Get image html tag
     * 
     * @param int|string $imageId
     * @param bool $withPlaceholder
     * @param string $size
     * @param string $class
     * @param string $alt
     * 
     * @return string 
     */
    public function getImage($imageId, $withPlaceholder = false, $size = 'full', $class = '', $alt = '')
    {
        $placeholder = $this->getPlaceholder($class);

        if ($imageId) {
            return wp_get_attachment_image($imageId, $size, false, ["class" => $class, "alt" => $alt]);
        } else {
            if ($withPlaceholder) {
                return $placeholder;
            }
        }

        return '';
    }

    /**
     * Get the post thumbnail
     * 
     * @param int|string $imageId
     * @param bool $withPlaceholder
     * @param string $size
     * @param string $class
     * @param string $alt
     * 
     * @return string 
     */
    public function getThePostImage($postId = '', $withPlaceholder = false, $size = 'full', $class = '', $alt = '')
    {
        if (!$postId) {
            $id = get_the_ID();
        } else {
            $id = $postId;
        }

        $placeholder = $this->getPlaceholder($class);

        if (has_post_thumbnail($id)) {
            return get_the_post_thumbnail($id, $size, ["class" => $class, "alt" => $alt]);
        } else {
            if ($withPlaceholder) {
                return  $placeholder;
            }
        }

        return "";
    }

    /**
     * Get link element
     * 
     * @param string $btn_url
     * @param string $btn_text
     * @param boolean $btn_target
     * @param string $btn_class
     * @param string $aria_labelledby
     * 
     * @return string 
     */

    public function getLink($btn_url = '', $btn_text = '', $btn_target = false, $btn_class = '', $aria_labelledby = '')
    {
        $btn_text = $btn_text ?? esc_html__('En savoir plus', 'Gutenberg');
        $link = '';
        $btn_class = $btn_class ? 'class="' . $btn_class . '"' : '';
        $link_id = uniqid('link-'); // id unique du lien
        $btn_id = 'id="' . $link_id . '"'; // recupere id unique du lien
        $btn_target = $btn_target ? 'target="_blank" title="' . __("(nouvelle fenêtre)", "Gutenberg") . ' ' . $btn_text . '"' : '';
        $aria_labelledby = $aria_labelledby ? 'aria-labelledby="' . $link_id . ' ' . $aria_labelledby . '"' : ''; // aria-labelledby="id_unique_du_lien id_unique_du_titre" 

        if (!empty($btn_url)) :
            $link .= '<a href="';
            $link .= $btn_url;
            $link .= '" ';
            $link .= $btn_id;
            $link .= ' ';
            $link .= $btn_class;
            $link .= ' ';
            $link .= $btn_target;
            $link .= ' ';
            $link .= $aria_labelledby;
            $link .= ' ';
            $link .= '>';
            $link .= $btn_text;
            $link .= '</a>';

            return  $link;
        endif;

        return $link;
    }
}
