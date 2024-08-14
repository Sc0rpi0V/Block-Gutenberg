<?php
$overtitle = $attributes["overtitle"] ?? '';
$overtitleLevel = $attributes["overtitleLevel"];
$title = $attributes["title"] ?? '';
$titleLevel = $attributes["titleLevel"];
$chapters = $attributes["chapters"];

$main_pdf_url = $attributes["mainPdfUrl"];
$main_pdf_id = $attributes["mainPdfId"] ?? '';
$main_pdf_size = $attributes["mainPdfSize"] ?? '';
$main_pdf_text = $attributes["mainPdfText"] ? $attributes["mainPdfText"] : __("Télécharger le PDF", "Gutenberg");

$second_pdf_url = $attributes["secondPdfUrl"];
$second_pdf_id = $attributes["secondPdfId"] ?? '';
$second_pdf_size = $attributes["secondPdfSize"] ?? '';
$second_pdf_text = $attributes["secondPdfText"] ? $attributes["secondPdfText"] : __("Télécharger le PDF", "Gutenberg");
?>
<?php if (!empty($overtitle) || !empty($title) || !empty($chapters)) : ?>
    <section class="block-gut pdf-chapters">
        <div class="pdf-chapters__inner container--xl">

            <?php if (!empty($overtitle) || !empty($title)) : ?>
                <header class="pdf-chapters__heading block-heading__wrapper">
                    <?php if (!empty($overtitle)) : ?>
                        <?= sprintf('<h%s class="block-heading__title-small pdf-chapters__title-small">', $overtitleLevel); ?>
                        <?= $overtitle; ?>
                        <?= sprintf('</h%s>', $overtitleLevel); ?>

                    <?php endif; ?>

                    <?php if (!empty($title)) : ?>
                        <?= sprintf('<h%s class="block-heading__title pdf-chapters__title">', $titleLevel); ?>
                        <?= $title; ?>
                        <?= sprintf('</h%s>', $titleLevel); ?>
                    <?php endif; ?>
                </header>
            <?php endif; ?>

            <?php if (!empty($chapters)) : ?>
                <div class="pdf-chapters__items">
                    <?php foreach ($chapters as $chapter) : ?>
                        <?php
                        $tag = $chapter["tag"];
                        $chapter_title = $chapter["chapterTitle"];
                        $title = $chapter["title"];
                        $chapter_url = $chapter["pdfUrl"];
                        $btn_text = $chapter["btnText"] ? $chapter["btnText"] : __("Télécharger ce chapitre", "Gutenberg");
                        $label_id = uniqid('title-');

                        ?>
                        <?php if (!empty($tag) || !empty($chapter_title) || !empty($title) || !empty($chapter_url)) : ?>
                            <article class="pdf-chapters__item item-with-pdf" data-pdf="<?=!empty($chapter['pdfName']) ? $chapter['pdfName'] : ''; ?>">
                                <?php if (!empty($tag)) : ?>
                                    <span class="pdf-chapters__item-tag tag">
                                        <?= $tag; ?>
                                    </span>
                                <?php endif; ?>
                                <?php if (!empty($chapter_title)) : ?>
                                    <span class="pdf-chapters__item-sub-title title-head">
                                        <?= $chapter_title; ?>
                                    </span>
                                <?php endif; ?>
                                <?php if (!empty($title)) : ?>
                                    <span class="pdf-chapters__item-title lvl-3" id="<?= $label_id; ?>">
                                        <?= $title; ?>
                                    </span>
                                <?php endif; ?>
                                <?php if (!empty($chapter_url)) : ?>
                                    <?= Gutenbergblocks()->post()->getLink($chapter_url, $btn_text, true, 'pdf-chapters__item-btn btn outline full-link-item datalayer-btn-pdf', $label_id); ?>
                                <?php endif; ?>
                            </article>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <div class="pdf-chapters__buttons">
                <?php if (!empty($main_pdf_url)) : ?>
                    <div class="pdf-chapters__button item-with-pdf" data-pdf="<?=!empty($attributes['mainPdfName']) ? $attributes['mainPdfName'] : ''; ?>">
                        <?= Gutenbergblocks()->post()->getLink($main_pdf_url, $main_pdf_text, true, 'pdf-chapters__btn--1 btn btn-dark datalayer-btn-pdf'); ?>
                    </div>
                <?php endif; ?>

                <?php if (!empty($second_pdf_url)) : ?>
                    <div class="pdf-chapters__button item-with-pdf" data-pdf="<?=!empty($attributes['secondPdfName']) ? $attributes['secondPdfName'] : ''; ?>">
                        <?= Gutenbergblocks()->post()->getLink($second_pdf_url, $second_pdf_text, true, 'pdf-chapters__btn--2 btn btn-dark outline datalayer-btn-pdf'); ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endif; ?>