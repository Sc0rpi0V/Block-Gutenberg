<?php
$page_items = $attributes['pageItems'];
?>

<?php if (!empty($page_items)) : ?>
	<section class="block-gut row-pages shape-bg--row-pages" <?php echo get_block_wrapper_attributes(); ?>>
		<div class="row-pages__inner container">
			<?php if (!empty($page_items)) : ?>
				<div class="row-pages__items">
					<?php foreach ($page_items as $pageItem) : ?>
						<?php if (!empty($pageItem['page'])) : ?>
							<?php
							$page = $pageItem['page'];
							$page_id = $page['id'];
							$page_title = Gutenbergblocks()->post()->getTitle($page_id);
							$page_excerpt = Gutenbergblocks()->post()->getExcerpt($page_id);
							$page_permalink = Gutenbergblocks()->post()->getPermalink($page_id);
							$page_permalink_text = __('Découvrir la suite', 'Gutenberg');
							$label_id = uniqid('title-');

							?>
							<article class="row-pages__item card-datalayer" data-title="<?=$page_title; ?>" data-type="<?php esc_attr_e("Page", "Gutenberg"); ?>">
								<h2 class="row-pages__item-title lvl-3" id="<?= $label_id; ?>">
									<?= $page_title; ?>
								</h2>
								<p class="row-pages__item-excerpt txt-reg">
									<?php if (!empty($page_excerpt)) : ?>
										<?= $page_excerpt; ?>
									<?php endif; ?>
								</p>
								<?php if (!empty($page_permalink)) : ?>
									<?= Gutenbergblocks()->post()->getLink($page_permalink, $page_permalink_text, false, 'row-pages__item-btn btn datalayer-btn-post-card', $label_id); ?>
								<?php endif; ?>
							</article>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>