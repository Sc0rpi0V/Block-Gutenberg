<?php
$title = $attributes['title'];
$show_breadcrumb = $attributes['showBreadcrumb'];
?>


<?php if (!empty($title)) : ?>
	<section class="block-gut hero-text" <?php echo get_block_wrapper_attributes(); ?>>
		<?php if ($show_breadcrumb) : ?>
			<?= do_blocks('<!-- wp:yoast-seo/breadcrumbs /-->'); ?>
		<?php endif; ?>
		<div class="hero-text__inner container">
			<h1 class="hero-text__title"><?= $title; ?></h1>
		</div>
	</section>
<?php endif; ?>