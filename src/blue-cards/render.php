<?php
// vars
$title = $attributes['title'] ?? '';
$titleLevel = $attributes['titleLevel'] ?? '';
$cards = $attributes['cards'] ?? [];
?>
<?php if (!empty($cards) || !empty($title)) : ?>
	<section class="block-gut blue-cards" data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>" <?php echo get_block_wrapper_attributes(); ?>>
		<div class="blue-cards__inner container">
			<?php if (!empty($title)) : ?>
				<header class="blue-cards__heading block-heading__wrapper">
					<?= sprintf('<h%s class="blue-cards__title">', $titleLevel); ?>
						<?= $title; ?>
					<?= sprintf('</h%s>', $titleLevel); ?>
				</header>
			<?php endif; ?>
			<?php if (!empty($cards)) : ?>
				<article class="blue-cards__items blue-cards__items--<?= count($cards); ?>">
					<?php foreach ($cards as $i => $card) : ?>
						<?php
						// vars
						$title = $card['title'] ?? "";
						$btn_url = $card['btnUrl'] ?? "";
						$btn_text = esc_html($card['btnText']) ?? esc_html__('En savoir plus', 'Gutenberg');
						$label_id = uniqid('title-');
						?>

						<?php if (!empty($title) || !empty($btn_url)) : ?>
							<div class="blue-cards__item blue-cards__item--<?= $i; ?>">
								<?php if (!empty($title)) : ?>
									<h4 class="blue-cards__item-title" id="<?= $label_id; ?>">
										<?= $title; ?>
									</h4>
								<?php endif; ?>
								<?php if (!empty($btn_url)) : ?>
									<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, false, 'btn after blue-cards__item-btn datalayer-btn', $label_id); ?>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					<?php endforeach; ?>
				</article>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>