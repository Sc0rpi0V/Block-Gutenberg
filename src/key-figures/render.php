<?php
$headAlign = $attributes['headAlign'];
$overtitle = $attributes["overtitle"];
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"];
$titleLevel = $attributes["titleLevel"];
$description = $attributes["description"];
$key_items = $attributes["keyItems"];
?>
<?php if ((!empty($overtitle)) || (!empty($title)) || (!empty($description)) || !empty($attributes['keyItems'])) : ?>
	<section class="block-gut key-figures" <?= get_block_wrapper_attributes(); ?>>

		<?php if ((!empty($overtitle)) || (!empty($title)) || (!empty($description))) : ?>
			<header class="key-figures__inner">
				<div class="key-figures__heading block-heading__wrapper <?= $headAlign ?> container--sm">

					<?php if (!empty($overtitle)) : ?>
						<?= sprintf('<h%s class="block-heading__title-small">', $overtitleLevel); ?>
						<?= $overtitle; ?>
						<?= sprintf('</h%s>', $overtitleLevel); ?>

					<?php endif; ?>

					<?php if (!empty($title)) : ?>
						<?= sprintf('<h%s class="block-heading__title">', $titleLevel); ?>
						<?= $title; ?>
						<?= sprintf('</h%s>', $titleLevel); ?>
					<?php endif; ?>

					<?php if (!empty($description)) : ?>
						<p class="block-heading__desc"><?= $description; ?></p>
					<?php endif; ?>
				</div>
			<?php endif; ?>

			<?php if (!empty($attributes['keyItems'])) : ?>
				<div class="key-figures__items container">
					<?php foreach ($attributes['keyItems'] as $item) : ?>
						<?php
						$title = $item['title'];
						$content = $item['content'];
						?>
						<?php if ((!empty($title)) || (!empty($content))) : ?>
							<div class="key-figures__item key-item">
								<?php if (!empty($title)) : ?>
									<span class="key-item__number center">
										<?= $title; ?>
									</span>
								<?php endif; ?>
								<?php if (!empty($content)) : ?>
									<span class="key-item__label">
										<?= $content; ?>
									</span>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
			</header>
	</section>
<?php endif; ?>