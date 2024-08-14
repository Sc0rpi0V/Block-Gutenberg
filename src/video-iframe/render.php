<?php if (!empty($attributes['iframe'])) : ?>

	<?php
	$overtitle = $attributes['overtitle'] ?: '';
	$overtitleLevel = $attributes["overtitleLevel"];
	$title = $attributes['title'] ?: '';
	$titleLevel = $attributes["titleLevel"];
	$description = $attributes['description'] ?: '';
	$iframe = $attributes['iframe'];
	$imgSrc = !empty($attributes['pictureSrc']) ? $attributes['pictureSrc'] : '';
	$imgAlt = !empty($attributes['pictureAlt']) ? $attributes['pictureAlt'] : '';
	$transcriptionUrl = $attributes['transcriptionUrl'] ?: '';
	$transcriptionText = $attributes['transcriptionText'] ?: __('En savoir plus', 'Gutenberg');
	$btnUrl = $attributes['btnUrl'] ?: '';
	$btnText = $attributes['btnText'] ?: __('En savoir plus', 'Gutenberg-back');
	$videoId = uniqid('video-');
	?>

	<section class="block-gut video-iframe" id="<?= $videoId; ?>" <?php echo get_block_wrapper_attributes(); ?> data-dl-title="<?=!empty($title) ? esc_attr($title) : ''; ?>">
		<div class="video-iframe__inner container--sm">
			<?php if (!empty($overtitle) || !empty($title) || !empty($description)) : ?>
				<header class="video-iframe__header block-heading__wrapper center">

					<?php if (!empty($overtitle)) : ?>
						<?= sprintf('<h%s class="video-iframe__header-overtitle block-heading__title-small">', $overtitleLevel); ?>
						<?= $overtitle; ?>
						<?= sprintf('</h%s>', $overtitleLevel); ?>
					<?php endif; ?>

					<?php if (!empty($title)) : ?>
						<?= sprintf('<h%s class="video-iframe__header-title block-heading__title">', $titleLevel); ?>
						<?= $title; ?>
						<?= sprintf('</h%s>', $titleLevel); ?>
					<?php endif; ?>

					<?php if (!empty($description)) : ?>
						<p class="video-iframe__header-content block-heading__desc"><?= $description; ?></p>
					<?php endif; ?>
				</header>
			<?php endif; ?>
			<div class="video-iframe__body">
				<div class="video-iframe__body-iframe">
					<div class="video-iframe__body-placeholder">
						<figure class="video-iframe__body-placeholder-figure">
							<?php if ($imgSrc) : ?>
								<img src="<?= $imgSrc; ?>" alt="<?= $imgAlt; ?>" />
							<?php else : ?>
								<?= Gutenbergblocks()->post()->getPlaceholder(); ?>
							<?php endif; ?>
						</figure>
						<button class="video-iframe__body-placeholder-player">
							<svg width="24" height="26" viewBox="0 0 24 26" fill="none" aria-hidden="true">
								<path d="M0 25.5V0L24 12.5L0 25.5Z" fill="white" />
							</svg>
							<span class="screen-reader-only"><?= __('Lire la vidéo', 'Gutenberg'); ?></span>
						</button>
					</div>
				</div>

				<?php if (!empty($attributes['legend'])) : ?>
					<div class="video-iframe__body-legend">
						<?= $attributes['legend']; ?>
					</div>
				<?php endif; ?>

				<footer class="video-iframe__body-placeholder-buttons">

					<?php if (!empty($transcriptionUrl)) : ?>
						<div class="video-iframe__body-placeholder-button video-iframe__body-placeholder-button--transcription right">
							<a class="btn-link right after datalayer-btn" href="<?= $transcriptionUrl; ?>"><?= $transcriptionText; ?></a>
						</div>
					<?php endif; ?>

					<?php if (!empty($btnUrl)) : ?>
						<div class="video-iframe__body-placeholder-button video-iframe__body-placeholder-button--all center">
							<a class="btn datalayer-btn" href="<?= $btnUrl; ?>"><?= $btnText; ?></a>
						</div>
					<?php endif; ?>
				</footer>
			</div>
		</div>
	</section>
<?php endif; ?>

<script type="text/javascript">
	window.addEventListener('load', function(event) {

		var iframePlayer = '<?= $iframe; ?>'
		var iframeParent = document.querySelector('#<?= $videoId; ?> .video-iframe__body-placeholder')
		var thumbnailIframe = document.querySelector('#<?= $videoId; ?> .video-iframe__body-iframe')
		var thumbnailPlayer = document.querySelector('#<?= $videoId; ?> .video-iframe__body-placeholder-figure')
		var thumbnailPlayerIcon = document.querySelector('#<?= $videoId; ?> .video-iframe__body-placeholder-player')

		thumbnailIframe.addEventListener('click', event => {
			if (iframePlayer.length) {
				thumbnailPlayer.remove()
				thumbnailPlayerIcon.remove()
				iframeParent.innerHTML += iframePlayer
			}

		})
	})
</script>