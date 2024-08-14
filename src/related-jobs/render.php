<?php
// vars
$ref_items_style = $attributes["content"] ?? '';
$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"];
$description = $attributes["description"] ?? '';
$job_items = $attributes["jobItems"] ?? '';
$btn_url = $attributes["btnUrl"] ?? '';
$btn_text = !empty($attributes["btnText"]) ? $attributes["btnText"] : __('En savoir plus', 'Gutenberg');
$btn_type = $attributes["btnType"] ?? 'link';
$btn_target = $attributes["btnTarget"] ? 'target="_blank"' : '';
$icon_pos = $attributes["iconPos"] ?? '';
$head_align = $attributes["headAlign"] ?? '';
$foot_align = $attributes["footAlign"] ?? '';
?>
<?php if (!empty($overtitle) || !empty($title) || !empty($description) || !empty($job_items)) : ?>
	<section class="block-gut related-jobs" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="related-jobs__inner ">
			<?php if ((!empty($overtitle)) || (!empty($title)) || (!empty($description))) : ?>
				<div class="related-jobs__heading block-heading__wrapper <?= $head_align; ?> container--sm">

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

			<?php if (!empty($job_items)) : ?>
				<div class="related-jobs__items container">
					<?php foreach ($job_items as $job) : ?>
						<?php if (!empty($job['job'])) : ?>
							<?php
							$job = $job['job'];
							$job_id = $job['id'];
							$job_title = $job['title'];
							$job_type = $job['type'];
							$job_permalink = Gutenbergblocks()->post()->getPermalink($job_id);
							$job_text = __('Consulter', 'Gutenberg');
							$label_id = uniqid('title-');
							?>

							<article class="related-jobs__item card-datalayer" data-title="<?=$job_title; ?>" data-type="<?php esc_attr_e('Métier', 'Gutenberg'); ?>">
								<div class="related-jobs__item-title" id="<?= $label_id; ?>">
									<?= $job_title; ?>
								</div>
								<?= Gutenbergblocks()->post()->getLink($job_permalink, $job_text, false, 'related-jobs__item-link link full-link-item datalayer-btn-post-card', $label_id); ?>
							</article>
						<?php endif; ?>
					<?php endforeach; ?>

				</div>
			<?php endif; ?>
			<?php if (!empty($btn_url)) : ?>
				<div class="related-jobs__footer <?= $foot_align; ?>">
					<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, $btn_target, 'related-jobs__btn-link datalayer-btn ' . $btn_type . ' ' . $icon_pos); ?>
				</div>
			<?php endif; ?>
		</div>
	</section>
<?php endif; ?>