<?php

$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"];
$post_items = $attributes["postItems"] ?? '';

$btn_url = $attributes["btnUrl"] ?? '';
$btn_text = !empty($attributes["btnText"]) ? $attributes["btnText"] : __('En savoir plus', 'Gutenberg');
$btn_type = $attributes["btnType"] ?? 'link';
$btn_target = $attributes["btnTarget"] ? 'target="_blank"' : '';
$icon_pos = $attributes["iconPos"] ?? '';

$head_align = $attributes["headAlign"] ?? '';
$foot_align = $attributes["footAlign"] ?? '';

?>
<?php if (!empty($overtitle) || !empty($title) || !empty($post_items)) : ?>
	<section class="block-gut related-posts shape-bg--related-posts" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="related-posts__inner container <?= is_front_page() ? "shape--related-posts" : ""; ?>">

			<?php if (!empty($overtitle) || !empty($title)) : ?>
				<header class="related-posts__heading block-heading__wrapper <?= $head_align; ?>">
					<?php if (!empty($overtitle)) : ?>
						<?= sprintf('<h%s class="block-heading__title-small related-posts__title-small">', $overtitleLevel); ?>
						<?= $overtitle; ?>
						<?= sprintf('</h%s>', $overtitleLevel); ?>

					<?php endif; ?>

					<?php if (!empty($title)) : ?>
						<?= sprintf('<h%s class="block-heading__title related-posts__title">', $titleLevel); ?>
						<?= $title; ?>
						<?= sprintf('</h%s>', $titleLevel); ?>
					<?php endif; ?>
				</header>
			<?php endif; ?>

			<?php if (!empty($post_items)) : ?>
				<div class="related-posts__items">

					<?php foreach ($post_items as $postItem) : ?>

						<?php if (!empty($postItem['post'])) : ?>
							<?php
							// vars
							$post = $postItem['post'];
							$post_id = $post['id'];
							$post_permalink = get_permalink($post_id);
							$post_title = Gutenbergblocks()->post()->getTitle($post_id);
							$post_date = Gutenbergblocks()->post()->getDate($post_id);
							$post_type = $post['type'];
							$post_type_name = Gutenbergblocks()->post()->getCptNameBySlug($post_type);
							$post_tags = Gutenbergblocks()->post()->getTags($post_id);
							$post_btn_text = __('Consulter cette actualité', 'Gutenberg');
							$label_id = uniqid('title-');
							$post_btn = Gutenbergblocks()->post()->getLink($post_permalink, $post_btn_text, false, 'related-posts__item-btn btn outline full-link-item datalayer-btn-post-card', $label_id);
							?>

							<article class="related-posts__item related-posts__item--<?= $post_type; ?> card-datalayer" data-title="<?=$post_title; ?>" data-type="<?=$post_type_name; ?>">
								<div class="related-posts__item-tags">
									<span class='tag'>
										<?= $post_type_name; ?>
									</span>
									<?php if (!empty($post_tags)) : ?>
										<?php foreach ($post_tags as $tag) : ?>
											<span class='tag--outline'>
												<?= $tag->name; ?>
											</span>
										<?php endforeach; ?>
									<?php endif; ?>
								</div>
								<div class="related-posts__item-date title-head">
									<?= $post_date; ?>
								</div>
								<p class="related-posts__item-title lvl-3" id="<?= $label_id; ?>">
									<?= $post_title; ?>
								</p>
								<?= $post_btn; ?>

							</article>
						<?php endif; ?>
					<?php endforeach; ?>

				</div>
			<?php endif; ?>
			<?php if (!empty($btn_url)) : ?>
				<footer class="related-posts__footer <?= $foot_align; ?>">
					<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, $btn_target, 'related-posts__btn-link datalayer-btn ' . $btn_type . ' ' . $icon_pos); ?>
				</footer>
			<?php endif; ?>

		</div>
	</section>
<?php endif; ?>