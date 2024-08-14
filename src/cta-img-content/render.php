<?php
// vars
$picture_id = $attributes["pictureId"] ?? '';
$picture_src = $attributes["pictureSrc"] ?? '';
$picture_alt = $attributes["pictureAlt"] ?? '';
$picture = Gutenbergblocks()->post()->getImage($picture_id, false, "full", "cta-img-content__image", $picture_alt);
$title = $attributes["title"] ?? '';
$content = $attributes["content"] ?? '';
$bkgColor = $attributes["bkgColor"] ?? '';
$bkgModifier = $attributes["bkgModifier"] ?? '';
$url = $attributes["url"] ?? '';
$target = $attributes["target"];
$text = $attributes["text"] ?? '';
$icon_pos = $attributes["iconPos"] ?? '';
?>

<?php if (!empty($picture) || !empty($title) || !empty($content)) : ?>
	<section class="block-gut cta-img-content cta-img-content--<?= $bkgModifier; ?> container--sm" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="cta-img-content__inner ">
			<?php if (!empty($picture)) : ?>
				<figure class="cta-img-content__figure" aria-hidden="true">
					<?= $picture; ?>
				</figure>
			<?php endif; ?>

			<div class="cta-img-content__content">
				<?php if (!empty($title)) : ?>
					<span class="cta-img-content__title lvl-4">
						<?= $title; ?>
					</span>
				<?php endif; ?>
				<?php if (!empty($content)) : ?>
					<span class="cta-img-content__text txt-reg">
						<?= $content; ?>
					</span>
				<?php endif; ?>
				<?php if (!empty($url)) : ?>
					<?= Gutenbergblocks()->post()->getLink($url, $text, $target, 'datalayer-btn cta-img-content__btn btn ' . $icon_pos); ?>
				<?php endif; ?>
			</div>
		</div>
	</section>
<?php endif; ?>