<?php 
$overtitle = $attributes["overtitle"];
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"];
$titleLevel = $attributes["titleLevel"];
$description = $attributes["description"];
?>

<?php if(!empty($attributes['liste_cta'])) : ?>
	<section class="block-gut liste-cta" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">

		<div class="block-heading__wrapper container--xl">

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
					<div class="block-heading__desc"><?= $description; ?></div>
				<?php endif; ?>
		</div>

		<div class="liste-cta__inner container--xl">
			<?php
			$i = 0;
			foreach ($attributes['liste_cta'] as $cta) : ?>
				<?php $i++; ?>
				<?php if(!empty($cta['title'])) : ?>
					<div class="liste-cta__item ">
						<p id="title-<?=$i; ?>" class="liste-cta__title">
							<?=$cta['title']; ?>
						</p>

						<?php if(!empty($cta['link_url']) && !empty($cta['link_title'])) : ?>
							<?php if ($i === 0) : ?>
								<a aria-labelledby="title-<?=$i; ?>" class="liste-cta__action btn secondary--white full-link-item datalayer-btn" href="<?=$cta['link_url']; ?>"><?=$cta['link_title']; ?></a>
								<a aria-labelledby="title-<?=$i; ?>" class="liste-cta__action--mobile full-link-item datalayer-btn" href="<?=$cta['link_url']; ?>"><?=$cta['link_title_mobile']; ?></a>
							<?php else : ?>
								<a aria-labelledby="title-<?=$i; ?>" class="liste-cta__action btn secondary full-link-item datalayer-btn" href="<?=$cta['link_url']; ?>"><?=$cta['link_title']; ?></a>
								<a aria-labelledby="title-<?=$i; ?>" class="liste-cta__action--mobile full-link-item datalayer-btn" href="<?=$cta['link_url']; ?>"><?=$cta['link_title_mobile']; ?></a>
							<?php endif; ?>
						<?php endif; ?>
					</div>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>
	</section>
<?php endif; ?>