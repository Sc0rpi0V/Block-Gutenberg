	<?php
	$overtitle = $attributes["overtitle"] ?? '';
	$overtitleLevel = $attributes["overtitleLevel"];
	$description = $attributes["description"] ?? '';
	$title = $attributes["title"] ?? '';
	$titleLevel = $attributes["titleLevel"];
	$subsidiary_items = $attributes["subsidiaryItems"] ?? '';
	$btn_url = $attributes["btnUrl"] ?? '';
	$btn_text = !empty($attributes["btnText"]) ? $attributes["btnText"] : __('En savoir plus', 'Gutenberg');
	$btn_type = $attributes["btnType"] ?? 'link';
	$head_align = $attributes["headAlign"] ?? '';
	?>

	<?php if (!empty($overtitle) || !empty($title) || !empty($description) || !empty($subsidiary_items)) : ?>
		<section class="block-gut related-subsidiary shape-bg--related-subsidiary" <?php echo get_block_wrapper_attributes(); ?>>
			<div class="related-subsidiary__inner">

				<?php if (!empty($overtitle) || !empty($title) || !empty($content)) : ?>
					<header class="related-subsidiary__heading block-heading__wrapper <?= $head_align; ?> container--sm">
						<?php if (!empty($overtitle)) : ?>
							<?= sprintf('<h%s class="block-heading__title-small related-subsidiary__title-small">', $overtitleLevel); ?>
							<?= $overtitle; ?>
							<?= sprintf('</h%s>', $overtitleLevel); ?>

						<?php endif; ?>

						<?php if (!empty($title)) : ?>
							<?= sprintf('<h%s class="block-heading__title related-subsidiary__title">', $titleLevel); ?>
							<?= $title; ?>
							<?= sprintf('</h%s>', $titleLevel); ?>
						<?php endif; ?>

						<?php if (!empty($description)) : ?>
							<p class="block-heading__desc related-subsidiary__desc"><?= $description; ?></p>
						<?php endif; ?>

					</header>
				<?php endif; ?>

				<?php if (!empty($subsidiary_items)) : ?>
					<div class="related-subsidiary__items container">
						<?php foreach ($subsidiary_items as $subsidiaryItem) : ?>
							<?php if (!empty($subsidiaryItem['subsidiary'])) : ?>
								<?php
								$subsidiary = $subsidiaryItem['subsidiary'];
								$subsidiary_id = $subsidiary['id'];
								$subsidiary_title = Gutenbergblocks()->post()->getTitle($subsidiary_id);
								$subsidiary_excerpt = Gutenbergblocks()->post()->getExcerpt($subsidiary_id);
								$subsidiary_permalink = Gutenbergblocks()->post()->getPermalink($subsidiary_id);
								$subsidiary_thumbnail = Gutenbergblocks()->post()->getThePostImage($subsidiary_id, true, 'subsidiary-thumbnail-small', 'related-subsidiary__item-image', esc_html(get_the_title($subsidiary_id)));
								$label_id = uniqid('title-');
								$subsidiary_btn = Gutenbergblocks()->post()->getLink($subsidiary_permalink, __('Découvrir cette filiale', 'Gutenberg'), false, 'related-subsidiary__item-btn btn-dark outline full-link-item datalayer-btn-post-card', $label_id);

								?>
								<article class="related-subsidiary__item card-datalayer" data-title="<?=$subsidiary_title; ?>" data-type="<?php esc_attr_e('Filiale', 'Gutenberg'); ?>">
									<figure class="related-subsidiary__item-figure">
										<svg class="related-subsidiary__item-svg-1" width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0 30C0 13.4315 13.4315 0 30 0L76 0L76 46C76 62.5685 62.5685 76 46 76L0 76L0 30Z" fill="#33BBA7" />
											<?= $subsidiary_thumbnail; ?>
										</svg>
										<svg class="related-subsidiary__item-svg-2" width="38" height="56" viewBox="0 0 38 56" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M37.2159 27.9765L10.1924 55.0925L1.66779 46.5401L19.8149 28.3294L20.1667 27.9763L19.8148 27.6234L1.66789 9.42273L10.1925 0.870333L37.2159 27.9765Z" stroke="white" />
										</svg>
									</figure>

									<div class="related-subsidiary__item-title lvl-4" id="<?= $label_id; ?>">
										<?= $subsidiary_title; ?>
									</div>
									<p class="related-subsidiary__item-excerpt">
										<?= $subsidiary_excerpt; ?>
									</p>
									<?= $subsidiary_btn; ?>
								</article>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		</section>
	<?php endif; ?>