const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;

const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ButtonGroup, Button } = wp.components;
import classnames from 'classnames';

const setSidebarSelectAttribute = ( settings, name ) => {
    if ( name != 'core/list' ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
            bulletType: { type: 'string', default: 'arrow'}
        } ),
    } );
};

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'custom-attributes/set-sidebar-select-attribute',
    setSidebarSelectAttribute
);

const withSidebarSelect = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        if ( props.name != 'core/list' ) {
            return (
                <>
                    <BlockEdit { ...props }/>
                </>
            );
        }

        const { attributes, setAttributes } = props;

        if(!attributes.ordered){
            return (
                <Fragment>
                    <InspectorControls>
                        <PanelBody title={ __( 'Style de liste', 'Gutenberg-back' ) }>
                            <PanelRow>
                            <ButtonGroup>
                                { ['arrow', 'chevron', 'bullet', 'dash'].map( (nbr) => (
                                    <Button
                                        isLarge
                                        variant={ attributes.bulletType == nbr ? 'primary' : '' }
                                        onClick={ () => setAttributes( { bulletType: nbr } ) }
                                    >
                                        { nbr === 'arrow' ?
                                            (
                                                __("Fléche", "Gutenberg-back")
                                            ) : nbr === 'bullet' ?
                                            (
                                                __('Puce', 'Gutenberg-back')
                                            ) : nbr === 'dash' ?
                                            (
                                                __('Tiret', 'Gutenberg-back')
                                            ) : nbr === 'chevron' ? (
                                                __("Check", "Gutenberg-back")
                                            ) : ''
                                        }
                                    </Button>
                                ) ) }
                            </ButtonGroup>
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                    <div className={"list" + " list--" + attributes.bulletType }>
                        <BlockEdit { ...props } />
                    </div>
                </Fragment>
            );
        } else {
            return (
                <div className="list">
                    <BlockEdit { ...props } />
                </div>
            )
        }
    };
}, 'withSidebarSelect' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'custom-attributes/with-sidebar-select',
    withSidebarSelect
);

const saveSidebarSelectAttribute = ( props, blockType, attributes ) => {
    if ( blockType.name == 'core/list' ) {
        const { bulletType, ordered } = attributes;

        if ( bulletType && !ordered) {
            props.className = classnames(props.className, 'list-' + bulletType )
        }
    }
    return props;
};

wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'custom-attributes/save-sidebar-select-attribute',
    saveSidebarSelectAttribute
);