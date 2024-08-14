import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	PanelRow,
	ToggleControl,
	ButtonGroup,
	Button,
    Tip
} from '@wordpress/components';


export default function Inspector(props) {

    const { attributes, setAttributes } = props;

    var icons = [
        'none',
        'before',
        'after',
        'external'
    ];

    return(
        <InspectorControls>
            <PanelBody title={__('Options du bloc liste de carte', 'Gutenberg-back')} initialOpen={true}>
                <PanelRow>
                    <label>{__('Niveau du titre de la catégorie du bloc:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.overtitleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { overtitleLevel: nbr } ) }
                            >
                                {'h' + nbr}
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
                <PanelRow>
                    <label>{__('Niveau du titre principal du bloc:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['2', '3', '4', '5', '6'].map( (nbr) => (
                            <Button
                                isLarge
                                variant={ attributes.titleLevel == nbr ? 'primary' : '' }
                                onClick={ () => setAttributes( { titleLevel: nbr } ) }
                            >
                                {'h' + nbr}
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
                <PanelRow>
                    <label>{__('Alignement des titres:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['left', 'center'].map( (pos) => (
                            <Button
                                isLarge
                                variant={ attributes.headAlign == pos ? 'primary' : '' }
                                onClick={ () => setAttributes(
                                        { 
                                        headAlign: pos,
                                    } 
                                )}
                            >
                                { pos === 'left' ?
                                    (
                                        <span className="dashicon dashicons dashicons-align-pull-left"></span>
                                    ) :  pos === 'center' ? (
                                        <span className="dashicon dashicons dashicons-align-center"></span>
                                    ) : ''
                                }
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
                <PanelRow>
                    <label>{__('Style d\'affichage des cartes:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <div>
                        <ButtonGroup>
                            { [1, 2].map( (style) => (
                                <Button
                                    isLarge
                                    variant={ attributes.cardItemsStyle == style ? 'primary' : '' }
                                    onClick={ () => setAttributes( { cardItemsStyle: style } ) }
                                >
                                    {sprintf(__("style %s", "Gutenberg-back"), style)}
                                </Button>
                            ) ) }
                        </ButtonGroup>
                        <div class="publication-style-info">
                            {
                                attributes.cardItemsStyle === 1 ? 
                                    <Tip>
                                        <div className="publication-style-info__title">{__('Style 1 :', 'Gutenberg-back')}</div>
                                        {__('Les élements sont alignés par 4, le visuel de publication forme un cercle (si il existe), la carte possède une ombre portée de couleur jaune.', 'Gutenberg-back')}
                                    </Tip>
                                : attributes.cardItemsStyle === 2 ? 
                                    <Tip>
                                        <div className="publication-style-info__title">{__('Style 2 :', 'Gutenberg-back')}</div>
                                        {__('Les élements sont alignés par 3, le visuel de publication forme un carré (si il existe), la carte possède une ombre portée de couleur en alternance bleu et jaune.', 'Gutenberg-back')}
                                    </Tip>
                                : ''
                            }
                        </div>
                    </div>
                </PanelRow>
                <PanelRow>
                    <label>{__('Alignement du bouton:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup>
                        { ['left', 'center'].map( (pos) => (
                            <Button
                                isLarge
                                variant={ attributes.footAlign == pos ? 'primary' : '' }
                                onClick={ () => setAttributes(
                                        { 
                                        footAlign: pos,
                                    } 
                                )}
                            >
                                { pos === 'left' ?
                                    (
                                        <span className="dashicon dashicons dashicons-align-pull-left"></span>
                                    ) :  pos === 'center' ? (
                                        <span className="dashicon dashicons dashicons-align-center"></span>
                                    ) : ''
                                }
                            </Button>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
                <PanelRow>
                    <label>{__('Cible du lien:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ToggleControl
                        label={__('Afficher le lien dans un nouvel onglet', 'Gutenberg-block')}
                        checked={ attributes.btnTarget }
                        onChange={ () => setAttributes( {
                                btnTarget: ! attributes.btnTarget,
                                iconPos: (!attributes.btnTarget) && (attributes.iconPos === 'before') ? 'none' : attributes.iconPos
                            } )
                        }
                    />
                </PanelRow>
                <PanelRow>
                    <label>{__('Icône du lien:', 'Gutenberg-block')}</label>
                </PanelRow>
                <PanelRow>
                    <ButtonGroup className="iconSelector">
                        { icons.map( (posIcon) => (
                            <>
                                <Button
                                    className="has-icon"
                                    disabled={(attributes.btnTarget) && (posIcon === 'before') ? true : false}
                                    isLarge
                                    variant={ attributes.iconPos == posIcon ? 'primary' : '' }
                                    onClick={ () => setAttributes( { iconPos: posIcon } ) }
                                >
                                    { posIcon === 'none' ?
                                        (
                                            <span className="dashicon dashicons dashicons-no-alt"></span>
                                        ) : posIcon === 'external' ? (
                                            <span className="dashicon dashicons dashicons-arrow-right-alt external-link"></span>
                                        ) : posIcon === 'before' ? (
                                            <>
                                                <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                                                {__('____', 'Gutenberg-back')}
                                            </>
                                        ) : posIcon === 'after' ? (
                                            <>
                                                {__('____', 'Gutenberg-back')}
                                                <span className="dashicon dashicons dashicons-arrow-right-alt"></span>
                                            </>
                                        ) : ''
                                    }
                                </Button>
                            </>
                        ) ) }
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    )
}