<?php

$img_alt = $attributes['pictureAlt'] ?? '';
$img_id = $attributes['pictureId']  ?? '';
$img = Gutenbergblocks()->post()->getImage($img_id, false, 'card-thumbnail-small', 'image-card__image', $img_alt);

$card_title = $attributes['cardTitle'];
$card_title_tag = $attributes['cardTitleTag'];
$card_items = $attributes['cardItems'];
?>
<?php if (!empty($card_items) || !empty($card_title) || !empty($img)) : ?>
    <section class="block-gut image-card">
        <div class="image-card__inner container">
            <?php if (!empty($img)) : ?>
                <div class="image-card__col-figures">
                    <div class="image-card__figures">
                        <figure class="image-card__figure-1" aria-hidden="true">
                            <?= $img; ?>
                        </figure>
                        <figure class="image-card__figure-2" aria-hidden="true">
                            <svg width="139" height="140" viewBox="0 0 139 140" fill="none" class="image-card__figure-2--round">
                                <path d="M69.5 0.981442C107.884 0.981444 139 32.0977 139 70.4814C139 108.865 107.884 139.981 69.5 139.981C31.1162 139.981 -4.71575e-06 108.865 -3.03794e-06 70.4814C-1.36013e-06 32.0977 31.1162 0.981441 69.5 0.981442Z" fill="#F5D750" />
                            </svg>
                            <svg width="139" height="140" viewBox="0 0 139 140" fill="none" class="image-card__figure-2--petale">
                                <path d="M139 0.981445L139 70.4814C139 108.865 107.884 139.981 69.5 139.981L-6.07588e-06 139.981L-2.62268e-06 60.9814C-1.17422e-06 27.8444 26.8629 0.98144 60 0.981442L139 0.981445Z" fill="#F1F4FF" />
                            </svg>
                        </figure>
                    </div>

                    <figure class="image-card__shape" aria-hidden="true">
                        <svg width="547" height="220" viewBox="0 0 547 220" fill="none" class="image-card__shape-svg">
                            <path d="M0 0L437 0C497.751 0 547 49.2487 547 110V110C547 170.751 497.751 220 437 220L0 220L0 0Z" fill="#33BBA7" />
                            <path d="M396.458 132.066C377.968 132.066 367.938 124.355 360.61 118.723C354.537 114.061 351.196 111.491 342.914 111.491C334.631 111.491 331.277 114.061 325.205 118.73C317.88 124.355 307.846 132.066 289.363 132.066V104.451C297.652 104.451 300.993 101.88 307.066 97.2181C314.394 91.5864 324.424 83.875 342.914 83.875C361.403 83.875 371.424 91.5864 378.749 97.2119C384.821 101.877 388.162 104.451 396.458 104.451C404.753 104.451 408.085 101.88 414.154 97.2181C421.482 91.5864 431.512 83.875 450.002 83.875V111.491C441.706 111.491 438.365 114.061 432.293 118.73C424.968 124.355 414.934 132.066 396.458 132.066V132.066Z" fill="white" />
                        </svg>

                    </figure>
                </div>
            <?php endif; ?>

            <?php if (!empty($card_items) || !empty($card_title)) : ?>
                <div class="image-card__col-content">
                    <?php if (!empty($card_title)) : ?>
                        <div class="image-card__title lvl-3"><?= $card_title; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($card_items)) : ?>
                        <?php foreach ($card_items as $card_item) : ?>
                            <div class="image-card__content">
                                <?php if (!empty($card_item['title'])) : ?>
                                    <div class="image-card__content-title lvl-5">
                                        <?= $card_item['title']; ?>
                                    </div>
                                <?php endif; ?>

                                <?php if (!empty($card_item['content'])) : ?>
                                    <div class="image-card__content-text">
                                        <?= $card_item['content']; ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </div>
            <?php endif; ?>
        </div>
    </section>
<?php endif; ?>