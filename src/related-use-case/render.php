<?php

// vars
$ref_items_style = $attributes["refItemsStyle"];
$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"];
$post_items = $attributes["refItems"] ?? '';
$btn_url = $attributes["btnUrl"] ?? '';
$btn_text = !empty($attributes["btnText"]) ? $attributes["btnText"] : __('En savoir plus', 'Gutenberg');
$btn_type = $attributes["btnType"] ?? 'link';
$btn_target = $attributes["btnTarget"] ? 'target="_blank"' : '';
$icon_pos = $attributes["iconPos"] ?? '';
$head_align = $attributes["headAlign"] ?? '';
$foot_align = $attributes["footAlign"] ?? '';
?>

<?php if (!empty($overtitle) || !empty($title) || !empty($post_items)) : ?>
	<section class="block-gut related-use-case shape-bg--related-use-case " <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="related-use-case__inner">
			<?php if (!empty($overtitle) || !empty($title)) : ?>
				<header class="related-use-case__heading block-heading__wrapper  container--sm <?= $head_align; ?>">

					<?php if (!empty($overtitle)) : ?>
						<?= sprintf('<h%s class="block-heading__title-small related-use-case__title-small">', $overtitleLevel); ?>
						<?= $overtitle; ?>
						<?= sprintf('</h%s>', $overtitleLevel); ?>

					<?php endif; ?>

					<?php if (!empty($title)) : ?>
						<?= sprintf('<h%s class="block-heading__title related-use-case__title">', $titleLevel); ?>
						<?= $title; ?>
						<?= sprintf('</h%s>', $titleLevel); ?>
					<?php endif; ?>

				</header>
			<?php endif; ?>

			<?php if (!empty($post_items)) : ?>
				<div class="related-use-case__items related-use-case__items--<?= $ref_items_style; ?> container">
					<?php foreach ($post_items as $postItem) : ?>
						<?php
						if (!empty($postItem['use_case'])) : ?>
							<?php
							// vars
							$post = $postItem['use_case'];
							$post_id = $post['id'];
							$post_title = $post['title'];
							$post_type = $post['type'];
							$post_permalink = Gutenbergblocks()->post()->getPermalink($post_id);
							$post_thumbnail = Gutenbergblocks()->post()->getThePostImage($post_id, true, 'medium', "related-use-case__item-image");
							$post_taxo_location = Gutenbergblocks()->post()->getTerms($post_id, "use_case_location");
							$post_taxo_location_precise = Gutenbergblocks()->post()->getTerms($post_id, "use_case_precise_location");
							$post_taxo_subsidiary = Gutenbergblocks()->post()->getTerms($post_id, "use_case_subsidiary");
							$post_taxo_cat = Gutenbergblocks()->post()->getTerms($post_id, "use_case_cat");
							$post_excerpt = Gutenbergblocks()->post()->getExcerpt($post_id);
							$post_reading_time = Gutenbergblocks()->post()->getReadingTime($post_id);
							$label_id = uniqid('title-');
							?>

							<?php // articles alignés verticalements 
							?>
							<?php if ($ref_items_style === 'vertical') : ?>
								<?php if (!empty($post_taxo_location) || (!empty($post_title)) || (!empty($post_excerpt))) : ?>
									<article class="related-use-case__item--vertical card-datalayer" data-title="<?= $post_title; ?>" data-type="<?php esc_attr_e("Référence", "Gutenberg"); ?>">
										<ul class="related-use-case__item-tags" aria-label="<?= __('Liste de tags', 'Gutenberg'); ?>">
											<?php if (!empty($post_taxo_location)) : ?>
												<?php foreach ($post_taxo_location as $location) : ?>
													<li class='tag--outline'><?= $location->name; ?></li>
												<?php endforeach; ?>
											<?php endif; ?>
										</ul>

										<?php if (!empty($post_title)) : ?>
											<div class="related-use-case__item-title--vertical" id="<?= $label_id; ?>"><?= $post_title; ?></div>
										<?php endif; ?>
										<?php if (!empty($post_permalink) && !empty($post_excerpt)) : ?>
											<?= Gutenbergblocks()->post()->getLink($post_permalink, $post_excerpt, false, 'related-use-case__item-excerpt link after full-link-item datalayer-btn-post-card', $label_id) ?>
										<?php endif; ?>
										<?php if (!empty($post_thumbnail)) : ?>
											<figure class="related-use-case__item-figure" aria-hidden="true">
												<?= $post_thumbnail; ?>
											</figure>
										<?php endif; ?>
									</article>
								<?php endif; ?>
							<?php else : // articles aligné horizontalement 
							?>

								<article class="related-use-case__item card-datalayer" data-title="<?= $post_title; ?>" data-type="<?php esc_attr_e("Référence", "Gutenberg"); ?>">
									<div class="related-use-case__item-tags">

										<?php if (!empty($post_taxo_subsidiary)) : ?>
											<?php foreach ($post_taxo_subsidiary as $subsidiary) : ?>
												<span class='tag'>
													<?= $subsidiary->name; ?>
												</span>
											<?php endforeach; ?>
										<?php endif; ?>

										<?php if (!empty($post_taxo_cat)) : ?>
											<?php foreach ($post_taxo_cat as $cat) : ?>
												<span class='tag--outline'>
													<?= $cat->name; ?>
												</span>
											<?php endforeach; ?>
										<?php endif; ?>
										<?php if (!empty($post_taxo_location)) : ?>
											<?php foreach ($post_taxo_location as $taxo) : ?>
												<span class='tag--outline'>
													<?= $taxo->name; ?>
												</span>
											<?php endforeach; ?>
										<?php endif; ?>
										<?php if (!empty($post_reading_time)) : ?>
											<span class='related-use-case__item-reading-time'>
												<?= $post_reading_time; ?>
											</span>
										<?php endif; ?>
									</div>

									<?php if (!empty($post_taxo_location_precise)) : ?>
										<?php foreach ($post_taxo_location_precise as $location_precise) : ?>
											<div class='related-use-case__item-localisation'>
												<?= $location_precise->name; ?>
											</div>
										<?php endforeach; ?>
									<?php endif; ?>
									<div class="related-use-case__item-title " id="<?= $label_id; ?>">
										<?= $post_title; ?>
									</div>
									<?php $post_permalink_text = __('Lire la suite', 'Gutenberg'); ?>
									<?= Gutenbergblocks()->post()->getLink($post_permalink, $post_permalink_text, false, 'related-use-case__item-btn link after full-link-item datalayer-btn-post-card', $label_id) ?>
								</article>
							<?php endif; ?>
						<?php endif; ?>
					<?php endforeach; ?>

				</div>
			<?php endif; ?>
			<?php if (!empty($btn_url)) : ?>
				<footer class="related-use-case__footer <?= $foot_align; ?>">
					<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, $btn_target, 'related-use-case__btn-link datalayer-btn ' . $btn_type . ' ' . $icon_pos) ?>
				</footer>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>