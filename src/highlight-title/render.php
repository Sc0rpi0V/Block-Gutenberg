<?php
$overtitle = $attributes["overtitle"];
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"];
$titleLevel = $attributes["titleLevel"];
$description = $attributes["description"];
?>


<?php if(!empty($overtitle) || !empty($title) || !empty($description)) : ?>
	<section class="block-gut heading-homepage heading-homepage--<?=$attributes['heading_affichage']; ?>" <?php echo get_block_wrapper_attributes(); ?>>

		<div class="heading-homepage__inner container">

			<div class="heading-homepage__col-content block-heading__wrapper">
				<?php if (!empty($overtitle)) : ?>
					<?= sprintf('<h%s class="block-heading__title-small heading-homepage__title-small">', $overtitleLevel); ?>
						<?= $overtitle; ?>
					<?= sprintf('</h%s>', $overtitleLevel); ?>	
				<?php endif; ?>

				<?php if (!empty($title)) : ?>
					<?= sprintf('<h%s class="block-heading__title heading-homepage__title">', $titleLevel); ?>
						<?= $title; ?>
					<?= sprintf('</h%s>', $titleLevel); ?>
				<?php endif; ?>

				<?php if (!empty($description)) : ?>
					<div class="block-heading__desc heading-homepage__desc"><?= $description; ?></div>
				<?php endif; ?>
			</div>
			<?php if($attributes['heading_image_side']) : ?>
				<div class="heading-homepage__col-img">
					<?=Gutenbergblocks()->post()->getImage($attributes['heading_image_side']['id']); ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>