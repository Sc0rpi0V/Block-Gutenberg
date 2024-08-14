<?php
$picture_id = $attributes["pictureId"] ?? '';
$picture_src = $attributes["pictureSrc"] ?? '';
$picture_alt = $attributes["pictureAlt"] ?? '';
$quote = $attributes["quote"] ?? '';
$author = $attributes["author"] ?? '';
$job = $attributes["job"] ?? '';
$text_align = $attributes["textAlign"];
$picture = Gutenbergblocks()->post()->getImage($picture_id, false, 'thumbnail', "quote__image", $picture_alt);
?>

<?php if (!empty($picture) || !empty($quote) || !empty($author) || !empty($job)) : ?>
	<figure class="block-gut quote quote--<?= $text_align; ?> container--sm" <?php echo get_block_wrapper_attributes(); ?>>
		<div class="quote__inner ">

			<?php if (!empty($picture)) : ?>
				<figure class="quote__figure" aria-hidden="true">
					<?= $picture; ?>
				</figure>
			<?php endif; ?>

			<div class="quote__content">
				<?php if (!empty($quote)) : ?>
					<blockquote>
						<p class="quote__quote">“<?= $quote; ?>”</p>
					</blockquote>
				<?php endif; ?>
				<?php if ((!empty($author) || (!empty($job)))) : ?>
					<figcaption>
						<?php if (!empty($author)) : ?>
							<span class="quote__author"><?= $author; ?></span>
						<?php endif; ?>
						<?php if (!empty($job)) : ?>
							<p class="quote__job"><?= $job; ?></p>
						<?php endif; ?>
					</figcaption>
				<?php endif; ?>
			</div>
		</div>
	</figure>
<?php endif; ?>