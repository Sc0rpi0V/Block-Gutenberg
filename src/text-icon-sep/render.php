<?php
$template = basename(get_page_template());

switch ($template) {
	case 'solutions-expertises.php':
		$template_name =  'text-icon-sep--solutions-expertises';
		break;
	case 'radd.php':
		$template_name =  'text-icon-sep--radd';
		break;
	case 'fondation.php':
		$template_name =  'text-icon-sep--fondation';
		break;
	default;
		$template_name =  'text-icon-sep--' . get_post_type();
		break;
}
?>

<section class="block-gut text-icon-sep separators text-icon-sep--<?= $attributes['style']; ?> <?= $template_name; ?>">
	<div class="text-icon-sep__wrapper">
		<?= $content; ?>
	</div>
</section>