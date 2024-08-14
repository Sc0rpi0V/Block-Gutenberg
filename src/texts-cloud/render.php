<?php
$title = $attributes['title'];
$titleLevel = $attributes["titleLevel"];
$cloud_items = $attributes['cloudItems'];
?>

<?php if (!empty($cloud_items)) : ?>
	<section class="block-gut texts-cloud" <?php echo get_block_wrapper_attributes(); ?>>
		<div class="texts-cloud__inner container--sm">
			<?php if (!empty($title)) : ?>
				<div class="texts-cloud__heading block-heading__wrapper">
					<?= sprintf('<h%s class="block-heading__title texts-cloud__title">', $titleLevel); ?>
					<?= $title; ?>
					<?= sprintf('</h%s>', $titleLevel); ?>
				</div>
			<?php endif; ?>

			<ul class="texts-cloud__items">
				<?php foreach ($cloud_items as $cloud_item) : ?>
					<?php
					$cloud_item = $cloud_item['text'];
					?>
					<?php if (!empty($cloud_item)) : ?>
						<li class="texts-cloud__item">
							<?= $cloud_item; ?>
						</li>
					<?php endif; ?>
				<?php endforeach; ?>
			</ul>
		</div>
	</section>
<?php endif; ?>