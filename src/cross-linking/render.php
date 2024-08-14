<?php 
	$prevOvertitle = $attributes['prevOvertitle'] ?? '';
	$prevTitle = $attributes['prevTitle'] ?? '';
	$prevUrl = $attributes['prevUrl'] ?? '';
	$prevLinkText = !empty($attributes['prevLinkText']) ? $attributes['prevLinkText'] : __('Découvrez la suite', 'Gutenberg');
	$nextOvertitle = $attributes['nextOvertitle'] ?? '';
	$nextTitle = $attributes['nextTitle'] ?? '';
	$nextUrl = $attributes['nextUrl'] ?? '';
	$nextLinkText = !empty($attributes['nextLinkText']) ? $attributes['nextLinkText'] : __('Découvrez la suite', 'Gutenberg');
?>
<section class="block-gut cross-linking" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=esc_attr__('Bloc Cross linking', 'Gutenberg'); ?>">
	<div class="cross-linking__inner container">
		<?php if(!empty($prevOvertitle) || !empty($prevTitle) || !empty($prevUrl)) : ?>
			<div class="cross-linking__page cross-linking__page--before">
				<div class="cross-linking__arrow"></div>
				<div class="cross-linking__content">
					<?php if(!empty($prevOvertitle)) : ?>
						<span class="cross-linking__overtitle"><?=$prevOvertitle; ?></span>
					<?php endif; ?>
					<?php if(!empty($prevTitle)) : ?>
						<p class="cross-linking__title">
							<?=$prevTitle; ?>
						</p>
					<?php endif; ?>
					<?php if(!empty($prevUrl)) : ?>
						<a class="cross-linking__link link before full-link-item datalayer-btn" href="<?=$prevUrl; ?>"><?=esc_html($prevLinkText); ?></a>
					<?php endif; ?>
				</div>
			</div>
		<?php endif; ?>

		<?php if(!empty($nextOvertitle) || !empty($nextTitle) || !empty($nextUrl)) : ?>
			<div class="cross-linking__page cross-linking__page--after">
				<div class="cross-linking__content">
					<?php if(!empty($nextOvertitle)) : ?>
						<span class="cross-linking__overtitle"><?=$nextOvertitle; ?></span>
					<?php endif; ?>
					<?php if(!empty($nextTitle)) : ?>
						<p class="cross-linking__title">
							<?=$nextTitle; ?>	
						</p>
					<?php endif; ?>
					<?php if(!empty($nextUrl)) : ?>
						<a class="cross-linking__link link-dark before full-link-item datalayer-btn" href="<?=$nextUrl; ?>"><?=esc_html($nextLinkText); ?></a>
					<?php endif; ?>
				</div>
				<div class="cross-linking__arrow"></div>
			</div>
		<?php endif; ?>
	</div>
</section>