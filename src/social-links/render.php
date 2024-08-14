<?php
$title = $attributes['title'];
$social_items = $attributes['socialItems'];
?>
<?php if(!empty($social_items)) : ?>
	<section class="block-gut social-links" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="social-links__inner container">
			<?php if (!empty($title)) : ?>
				<div class="social-links__heading block-heading__wrapper">
					<?php if (!empty($title)) : ?>
						<p class="block-heading__title-small social-links__title-small title-head">
							<?= $title; ?>
						</p>
					<?php endif; ?>
				</div>
			<?php endif; ?>
			<div class="social-links__items">
				<?php foreach ($social_items as $item) : ?>
					<?php
					$label = !empty($item["label"]) ? $item["label"] : __('Voir', 'Gutenberg');
					$url = $item["url"];
					?>
					<?php if(!empty($url)) : ?>
						<a class="block-heading__item-url link external datalayer-btn" href="<?= $url; ?>" target="_blank" title="<?= $label . " " . __('(nouvelle fenêtre)', 'Gutenberg'); ?>"><?= $label; ?></a>
					<?php endif; ?>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>