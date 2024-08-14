<?php
// vars

$show_breadcrumb = $attributes['showBreadcrumb'];
$img_alt = $attributes['pictureAlt'] ?? '';
$img_id = $attributes['pictureId'] ?? '';
$img = Gutenbergblocks()->post()->getImage($img_id, false, 'post-thumbnail-small', 'hero-img-title__image', $img_alt);

$show_date_and_author = $attributes['showDateAndAuthor'];
$date_label = $attributes['dateLabel'];
$date = $attributes['postDate'];
$author = $attributes['author'];
$title = $attributes['title'];

$text_content = $attributes['textContent'];

$show_ref = $attributes['showRef'];
$ref_content = $attributes['refContent'];

$show_btns = $attributes['showBtns'];

$btn_url_1 = $attributes['btnUrl1'];
$btn_text_1 = $attributes['btnText1'];
$btn_target_1 = $attributes['btnTarget1'];
$btn_url_2 = $attributes['btnUrl2'];
$btn_text_2 = $attributes['btnText2'];
$btn_target_2 = $attributes['btnTarget2'];

?>
<header class="block-gut hero-img-title shape-bg--hero" data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
    <?php if ($show_breadcrumb) : ?>
        <?= do_blocks('<!-- wp:yoast-seo/breadcrumbs /-->'); ?>
    <?php endif; ?>
    <div class="hero-img-title__inner container">

        <?php if (!empty($img)) : ?>
            <figure class="hero-img-title__figure" aria-hidden="true">
                <?= $img; ?>
            </figure>
        <?php endif; ?>

        <div class="hero-img-title__content">
            <?php if ($show_date_and_author) : ?>
                <div class="hero-img-title__date-author">
                    <div class="hero-img-title__date">
                        <?= $date_label; ?>
                        <span>
                            <?php printf(__('le %s', 'Gutenberg'), $date); ?>
                        </span>
                    </div>
                    <?php if (!empty($author)) : ?>
                        <span class="text-separator"></span>
                        <div class="hero-img-title__author">
                            <?php _e('Écrit par ', 'Gutenberg'); ?>
                            <span><?= $author; ?></span>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endif; ?>

            <?php if (!empty($title)) : ?>
                <h1 class="hero-img-title__title">
                    <?= $title; ?>
                </h1>
            <?php endif; ?>

            <?php if (!empty($text_content)) : ?>
                <p class="hero-img-title__text-content">
                    <?= $text_content; ?>
                </p>
            <?php endif; ?>

            <?php if ($show_btns) : ?>
                <?php if ($btn_url_1) : ?>
                    <a href="<?= $btn_url_1; ?>" <?= $btn_target_1 ? "target='_blank'" : ""; ?> class="btn primary hero-img-title__btn hero-img-title__btn--1 datalayer-btn"><?= $btn_text_1; ?></a>
                <?php endif; ?>

                <?php if ($btn_url_2) : ?>
                    <a href="<?= $btn_url_2; ?>" <?= $btn_target_2 ? "target='_blank'" : ""; ?> class="btn secondary hero-img-title__btn hero-img-title__btn--2 datalayer-btn"><?= $btn_text_2; ?></a>
                <?php endif; ?>

            <?php endif; ?>

            <?php if ($show_ref && !empty($ref_content)) : ?>
                <div class="hero-img-title__ref-magazine">
                    <svg class="hero-img-title__dot" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="5" cy="5" r="5" fill="#F5D750" />
                    </svg>
                    <span>
                        <?= $ref_content; ?>
                    </span>
                </div>
            <?php endif; ?>
        </div>

    </div>
</header>