<?php
$overtitle = $attributes["overtitle"];
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"];
$titleLevel = $attributes["titleLevel"];
$description = $attributes["description"];
?>

<?php if(!empty($overtitle) || !empty($title) || !empty($description)) : ?>
	<section class="block-gut highlight-content highlight-content--<?=$attributes['heading_affichage']; ?>" <?php echo get_block_wrapper_attributes(); ?>>
		<div class="highlight-content__inner container">
			<div class="highlight-content__col-content block-heading__wrapper">
				<?php if (!empty($overtitle)) : ?>
					<?= sprintf('<h%s class="block-heading__title-small highlight-content__title-small">', $overtitleLevel); ?>
						<?= $overtitle; ?>
					<?= sprintf('</h%s>', $overtitleLevel); ?>	
				<?php endif; ?>
				<?php if (!empty($title)) : ?>
					<?= sprintf('<h%s class="block-heading__title highlight-content__title">', $titleLevel); ?>
						<?= $title; ?>
					<?= sprintf('</h%s>', $titleLevel); ?>
				<?php endif; ?>

				<?php if (!empty($description)) : ?>
					<div class="block-heading__desc highlight-content__desc">
						<?=$attributes['description']; ?>
					</div>
				<?php endif; ?>

			</div>

			<?php if(!empty($attributes['heading_image_side'])) : ?>
				<div class="highlight-content__col-img">
					<?=Gutenbergblocks()->post()->getImage($attributes['heading_image_side']['id']); ?>
				</div>
			<?php endif; ?>
			<?php if($attributes['heading_image_after']): ?>
				<div class="highlight-content__bottom-img">
					<?=Gutenbergblocks()->post()->getImage($attributes['heading_image_after']['id']); ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>