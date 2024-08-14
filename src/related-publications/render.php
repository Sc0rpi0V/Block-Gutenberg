<?php
$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"];
$description = $attributes["description"] ?? '';
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"];
$publications_items = $attributes["publicationItems"] ?? '';
$btn_url = $attributes["btnUrl"] ?? '';
$btn_text = !empty($attributes["btnText"]) ? $attributes["btnText"] : __('En savoir plus', 'rapt');
$btn_type = $attributes["btnType"] ?? 'link';
$btn_target = $attributes["btnTarget"] ? 'target="_blank"' : '';
$icon_pos = $attributes["iconPos"] ?? '';
$head_align = $attributes["headAlign"] ?? '';
$foot_align = $attributes["footAlign"] ?? __('Découvrir la suite', 'Gutenberg');
?>
<?php if(!empty($overtitle) || !empty($title) || !empty($description) || !empty($publications_items)) : ?>
	<section class="block-gut related-publications shape-bg--related-publications" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="related-publications__inner container">

			<?php if (!empty($overtitle) || !empty($title) || !empty($description)) : ?>
				<header class="related-publications__heading block-heading__wrapper <?=$head_align; ?>">
					<?php if (!empty($overtitle)) : ?>
						<?= sprintf('<h%s class="block-heading__title-small related-publications__title-small">', $overtitleLevel); ?>
							<?= $overtitle; ?>
						<?= sprintf('</h%s>', $overtitleLevel); ?>	
					<?php endif; ?>

					<?php if (!empty($title)) : ?>
						<?= sprintf('<h%s class="block-heading__title related-publications__title">', $titleLevel); ?>
							<?= $title; ?>
						<?= sprintf('</h%s>', $titleLevel); ?>
					<?php endif; ?>

					<?php if (!empty($description)) : ?>
						<p class="block-heading__desc related-publications__desc"><?= $description; ?></p>
					<?php endif; ?>
				</header>
			<?php endif; ?>

			<?php if (!empty($publications_items)) : ?>
				<div class="related-publications__items">
					<?php foreach ($publications_items as $publicationItem) : ?>
						<?php if (!empty($publicationItem['publication'])) : ?>
							<?php
							$publication = $publicationItem['publication'];
							$publication_id = $publication['id'];
							$publication_title = Gutenbergblocks()->post()->getTitle($publication_id);
							$publication_type_name = Gutenbergblocks()->post()->getCptNameBySlug($publication['type']);
							$publication_permalink = Gutenbergblocks()->post()->getPermalink($publication_id);
							$publication_thumbnail = Gutenbergblocks()->post()->getThePostImage($publication_id, true, 'medium', "related-publications__item-image", esc_html(get_the_title($publication_id)));
							?>
							<article class="related-publications__item <?=$publication['type'] === 'document' ? 'item-with-pdf' : 'card-datalayer'; ?>" data-title="<?=$publication_title; ?>" <?=$publication['type'] === 'document' ? 'data-pdf="' . Gutenbergblocks()->document()->getFileName($publication_id) . '"' : ''; ?> data-type="<?=$publication_type_name; ?>">
								<div class="related-publications__item-tags">
									<?php if (!empty($publication_type_name)) : ?>
										<span class='tag'>
											<?= $publication_type_name; ?>
										</span>
									<?php endif; ?>
								</div>
								<div class="related-publications__item-title">
									<?=$publication_title; ?>
								</div>
								<?php if($publication['type'] === 'document') : ?>
									<?php if($pdfUrl = Gutenbergblocks()->document()->getPermalink($publication_id)) : ?>
										<a href="<?=$pdfUrl; ?>" class="related-publications__item-btn btn full-link-item datalayer-btn-pdf" target="_blank">
											<?php _e('Ouvrir le PDF', 'Gutenberg'); ?>
										</a>
									<?php endif; ?>
								<?php else : ?>
									<a href="<?=$publication_permalink; ?>" class="related-publications__item-btn btn full-link-item datalayer-btn-post-card"><?php _e('Découvrir la suite', 'Gutenberg'); ?></a>
								<?php endif; ?>
								<figure class="related-publications__item-figure">
									<?= $publication_thumbnail; ?>
								</figure>
							</article>
						<?php endif; ?>
					<?php endforeach; ?>
				</div>
			<?php endif; ?>
			<?php if (!empty($btn_url)) : ?>
				<div class="related-publications__footer <?= $foot_align; ?>">
					<?= Gutenbergblocks()->post()->getLink($btn_url, $btn_text, $btn_target, 'related-publications__btn-link datalayer-btn ' . $btn_type . ' ' . $icon_pos) ?>
				</div>
			<?php endif; ?>

		</div>
	</section>
<?php endif; ?>