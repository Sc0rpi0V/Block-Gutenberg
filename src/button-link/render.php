<?php
$url = $attributes["url"];
$text = $attributes["text"];
$type = $attributes["type"];
$target = $attributes["target"] ? "target='_blank'" : "";
$icon_pos = $attributes["iconPos"];
$btn_style = $attributes["btnStyle"];
$style_bkg = $attributes["styleBkg"];
$class_name = $attributes["className"] ?? '';
?>

<?php if (!empty($url)) : ?>

	<div class="block-gut btn-link__wrapper btn-link__wrapper <?=$attributes['align']; ?>" data-dl-title="<?=!empty($text) ? esc_attr($text) : esc_attr_e('En savoir plus', 'Gutenberg'); ?>">
		<a 
			href="<?= !empty($url) ? $url : ''; ?>" 
			<?=$target; ?> 
			class="datalayer-btn <?=!empty($class_name) ? $class_name : ''; ?> <?=!empty($type) ? $type . ' ' . $type . "-" . $style_bkg : ''; ?> <?=!empty($btn_style) ? $btn_style : ''; ?> <?=!empty($icon_pos) ? $icon_pos : ''; ?>"
			<?=!empty($target) && !empty($text) ? 'title="' . sprintf(esc_attr_e('%s (nouvelle fenêtre)', 'Gutenberg'). '"', $text) : ''; ?>
		>
			<?=!empty($text) ? esc_html($text) : esc_html_e('En savoir plus', 'Gutenberg'); ?>
		</a>
	</div>
<?php endif; ?>