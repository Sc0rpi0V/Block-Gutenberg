<?php
// vars
$card_items_style = $attributes["cardItemsStyle"] ?? '';
$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"] ?? '';
$description = $attributes["description"] ?? '';
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"] ?? '';
$cards_items = $attributes["cardItems"] ?? '';

$btn_url = $attributes["btnUrl"] ?? '';
$btn_text = $attributes["btnText"] ?? '';
$btn_type = $attributes["btnType"] ?? 'btn';
$btn_target = $attributes["btnTarget"];

$icon_pos = $attributes["iconPos"] ?? '';
$head_align = $attributes["headAlign"] ?? '';
$foot_align = $attributes["footAlign"] ?? '';
?>
<?php if (!empty($overtitle) || !empty($title) || !empty($description) || !empty($cards_items)) : ?>
	<section class="block-gut cards-list" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="cards-list__inner ">
			<?php if (!empty($overtitle) || !empty($title) || !empty($content)) : ?>
				<header class="cards-list__heading block-heading__wrapper <?= $head_align; ?> container--sm">
					<?php if (!empty($overtitle)) : ?>
						<?= sprintf('<h%s class="block-heading__title-small cards-list__title-small">', $overtitleLevel); ?>
							<?= $overtitle; ?>
						<?= sprintf('</h%s>', $overtitleLevel); ?>	
					<?php endif; ?>

					<?php if (!empty($title)) : ?>
						<?= sprintf('<h%s class="block-heading__title cards-list__title">', $titleLevel); ?>
							<?= $title; ?>
						<?= sprintf('</h%s>', $titleLevel); ?>	
					<?php endif; ?>

					<?php if (!empty($description)) : ?>
						<div class="block-heading__desc cards-list__desc">
							<?= $description; ?>
						</div>
					<?php endif; ?>
				</header>
			<?php endif; ?>

			<?php if (!empty($cards_items)) : ?>
				<div class="cards-list__items container cards-list--style-<?= $card_items_style; ?>__items">
					<?php foreach ($cards_items as $cardItem) : ?>
						<?php if (!empty($cardItem)) : ?>
							<?php
							// vars
							$card = $cardItem;
							$card_picture_id = $card['pictureId'];
							$card_picture_src = $card['pictureSrc'];
							$card_picture_alt = $card['pictureAlt'];
							$card_picture = Gutenbergblocks()->post()->getImage($card_picture_id, true, 'card-thumbnails', $card_picture_alt);
							$card_tag = $card['tag'];
							$card_title = $card['title'];
							$card_excerpt = $card['excerpt'];
							$card_link_title = $card['link_title'] ?? __('Découvrir la suite', 'Gutenberg');
							$card_url = $card['link'];
							?>

							<?php if ($card_items_style === 1) : ?>
								<article class="cards-list--style-1__item">
									<div class="cards-list--style-1__item-tags">
										<?php if (!empty($card_tag)) : ?>
											<span class='tag'>
												<?= $card_tag; ?>
											</span>
										<?php endif; ?>
									</div>

									<?php if (!empty($card_title)) : ?>
										<div class="cards-list--style-1__item-title">
											<?= $card_title; ?>
										</div>
									<?php endif; ?>

									<?php if (!empty($card_url)) : ?>
										<?= Gutenbergblocks()->post()->getLink($card_url, $card_link_title, false, 'btn cards-list--style-1__item-btn full-link-item datalayer-btn'); ?>
									<?php endif; ?>

									<?php if (!empty($card_picture)) : ?>
										<figure class="cards-list--style-1__item-figure" aria-hidden="true">
											<?= $card_picture; ?>
										</figure>
									<?php endif; ?>
								</article>
							<?php else : ?>
								<article class="cards-list--style-2__item">
									<?php if (!empty($card_title)) : ?>
										<h3 class="cards-list--style-2__item-title">
											<?= $card_title; ?>
										</h3>
									<?php endif; ?>

									<?php if (!empty($card_excerpt)) : ?>
										<p class="cards-list--style-2__item-desc txt-reg">
											<?= $card_excerpt; ?>
										</p>
									<?php endif; ?>

									<?php if (!empty($card_url)) : ?>
										<?= Gutenbergblocks()->post()->getLink($card_url, $card_link_title, false, 'link cards-list--style-2__item-link full-link-item datalayer-btn'); ?>
									<?php endif; ?>

									<?php if (!empty($card_picture)) : ?>
										<figure class="cards-list--style-2__item-figure" aria-hidden="true">
											<?= $card_picture; ?>
										</figure>
									<?php endif; ?>
								</article>
							<?php endif; ?>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>

			<?php if (!empty($btn_url)) : ?>
				<footer class="cards-list__footer <?= $foot_align; ?>">
					<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, $btn_target, $btn_type . ' cards-list__btn-link datalayer-btn'); ?>
				</footer>
			<?php endif; ?>
	</section>
<?php endif; ?>