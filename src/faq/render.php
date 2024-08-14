<?php
// vars
//var_dump($attributes);
//exit;
$faq_title = $attributes["faqTitle"] ?? '';
$faq_title_level = $attributes["faqTitleLevel"] ?? '2';
$faq_content = $attributes["faqContent"] ?? '';
$faq_items = $attributes["faqItems"] ?? '';
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php if (!empty($faq_title) || !empty($faq_content) || !empty($faq_items)) : ?>
		<section class="block-gut faq" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($faq_title) ? esc_attr($faq_title) : ''; ?>">
			<div class="faq__inner">
				<?php if (!empty($faq_title) || !empty($faq_content)) : ?>
					<header class="block-heading__wrapper faq__heading container--xs">
						<?php if (!empty($faq_title)) : ?>
							<?= sprintf('<h%s class="block-heading__title faq__title ">', $faq_title_level); ?>
							<?= $faq_title; ?>
							<?= sprintf('</h%s>', $faq_title_level); ?>
							<?php if (!empty($faq_content)) : ?>
								<div class="block-heading__desc faq__desc"><?= $faq_content; ?></div>
							<?php endif; ?>
						<?php endif; ?>
					</header>
				<?php endif; ?>

				<?php if (!empty($faq_items)) : ?>
					<div class="faq__items container--sm">
						<?php foreach ($faq_items as $faq_item) : ?>
							<?php
							// vars
							$faq_question = $faq_item['question'];
							$faq_question_level = $faq_item['questionLevel'] ?? '5';
							$faq_response = $faq_item['response'];
							$faq_link_title = !empty($faq_item['link_title']) ? $faq_item['link_title'] : __('En savoir plus', 'Gutenberg');
							$faq_link = $faq_item['link'];
							$label_id = uniqid('title-');

							?>

							<?php if (!empty($faq_question) || !empty($faq_response)) : ?>
								<article class="faq__article">
									<?php if (!empty($faq_question)) : ?>
										<?= sprintf('<h%s class="faq__article-question" id="%d">', $faq_question_level, $label_id); ?>
										<?= $faq_question; ?>
										<?= sprintf('</h%s>', $faq_question_level); ?>
									<?php endif; ?>
									<?php if (!empty($faq_response)) : ?>
										<p class="faq__article-answer txt-reg"><?= $faq_response; ?></p>
									<?php endif; ?>
									<?php if (!empty($faq_link)) : ?>
										<?= Gutenbergblocks()->post()->getLink($faq_link, $faq_link_title, false, 'faq__article-link link after full-link-item datalayer-btn', $label_id) ?>
									<?php endif; ?>
								</article>
							<?php endif; ?>

						<?php endforeach; ?>
					</div>
				<?php endif; ?>
			</div>
		</section>
	<?php endif; ?>
</div>