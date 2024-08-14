<?php
// vars
$tag = $attributes['tag'] ?? '';
$title = $attributes['title'] ?? '';
$title_level = $attributes['titleLevel'] ?? '';
$imgId = $attributes['imageId'] ?? '';
$imgAlt = $attributes['imageAlt'] ?? '';
$img = Gutenbergblocks()->post()->getImage($imgId, true, 'content-card-thumbnails', "content-card__img", $imgAlt);
$card_tag = $attributes['cardTag'] ?? '';
$card_title = $attributes['cardTitle'] ?? '';
$card_desc = $attributes['cardDesc'] ?? '';

$btn_url = $attributes['url'] ?? '';
$btn_text = $attributes['text'] ?? '';
$btn_target = $attributes['target'];
$btn = Gutenbergblocks()->post()->getLink($btn_url, $btn_text, $btn_target, 'content-card__content-btn btn outline none datalayer-btn');

?>
<section class="block-gut content-card" data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
	<div class="content-card__inner container">

		<?php if (!empty($tag) || !empty($title)) : ?>

			<header class="block-heading__wrapper content-card__heading container--sm">
				<div class="block-heading__title-small">
					<?= $tag; ?>
				</div>
				<?php if (!empty($title)) : ?>
					<?= sprintf('<h%s class="block-heading__title">', $title_level); ?>
					<?= $title; ?>
					<?= sprintf('</h%s>', $title_level); ?>
				<?php endif; ?>
			</header>

		<?php endif; ?>

		<article class="content-card__card">
			<?php if (!empty($img)) : ?>
				<figure class="content-card__figure">
					<?= $img; ?>
				</figure>
			<?php endif; ?>
			<div class="content-card__content">
				<?php if (!empty($card_tag)) : ?>
					<div class="tag content-card__content-tag">
						<?= $card_tag; ?>
					</div>
				<?php endif; ?>
				<?php if (!empty($card_title)) : ?>
					<div class="content-card__content-title lvl-3">
						<?= $card_title; ?>
					</div>
				<?php endif; ?>
				<?php if (!empty($card_desc)) : ?>
					<p class="content-card__content-desc txt-reg">
						<?= $card_desc; ?>
					</p>
				<?php endif; ?>
				<?php if (!empty($btn)) : ?>
					<?= $btn; ?>
				<?php endif; ?>
			</div>
		</article>
	</div>
</section>