<?php
//var 
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"];
$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"];
$tag = $attributes["tag"] ?? '';
$category = $attributes["category"] ?? '';

$pdf_url = $attributes["pdfUrl"] ?? '';
$pdf_text = $attributes["pdfText"] ?? '';

$btn_url = $attributes["btnUrl"] ?? '';
$btn_text = $attributes["btnText"] ?? '';

$thumbnail_id = $attributes["pictureId"] ?? '';
$thumbnail_alt = $attributes["pictureAlt"] ?? '';
$thumbnail = Gutenbergblocks()->post()->getImage($thumbnail_id, true, 'magazine-thumbnails', 'highlight-pdf__image', '');
?>

<section class="block-gut highlight-pdf item-with-pdf" <?php echo get_block_wrapper_attributes(); ?> data-pdf="<?=!empty($attributes['pdfName']) ? $attributes['pdfName'] : ''; ?>" data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
	<div class="highlight-pdf__inner container--sm">

		<?php if (!empty($thumbnail)) : ?>
			<figure class="highlight-pdf__figure">
				<?= $thumbnail; ?>
			</figure>
		<?php endif; ?>

		<div class="highlight-pdf__content">
			<?php if (!empty($category) || !empty($tag)) : ?>
				<div class="highlight-pdf__tags">
					<?php if (!empty($category)) : ?>
						<span class="tag--white">
							<?= $category; ?>
						</span>
					<?php endif; ?>
					<?php if (!empty($tag)) : ?>
						<span class="tag--white-outline">
							<?= $tag; ?>
						</span>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<?php if (!empty($overtitle)) : ?>
					<?= sprintf('<h%s class="highlight-pdf__subtitle">', $overtitleLevel); ?>
						<?= $overtitle; ?>
					<?= sprintf('</h%s>', $overtitleLevel); ?>	

			<?php endif; ?>

			<?php if (!empty($title)) : ?>
					<?= sprintf('<h%s class="highlight-pdf__title">', $titleLevel); ?>
						<?= $title; ?>
					<?= sprintf('</h%s>', $titleLevel); ?>
			<?php endif; ?>

			<?php if (!empty($pdf_url)) : ?>
				<?= Gutenbergblocks()->post()->getLink($pdf_url, $pdf_text, true, 'highlight-pdf__pdf btn datalayer-btn-pdf') ?>
			<?php endif; ?>

			<?php if (!empty($btn_url)) : ?>
				<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, false, 'highlight-pdf__link link datalayer-btn') ?>
			<?php endif; ?>
		</div>
	</div>
</section>