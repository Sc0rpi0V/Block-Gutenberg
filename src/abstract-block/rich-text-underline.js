import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
const { registerFormatType, toggleFormat } = window.wp.richText
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

/**
 * to see all available format run this code in your browser’s console :
 * wp.data.select( 'core/rich-text' ).getFormatTypes()
 * 
 * @see https://developer.wordpress.org/block-editor/how-to-guides/format-api/
 */

const AddUnderline = ({isActive, value, onChange}) => {
  return (
    <BlockControls>
      <ToolbarGroup>
        <ToolbarButton
            icon="editor-underline"
            title={__('Souligner', 'rapt-back')}
            onClick={ () => {
              onChange(
                  toggleFormat( value, {
                      type: 'custom-rich-text/underline',
                      attributes: {
                        style: 'text-decoration: underline;'
                      },
                      title: __('Souligner', 'rapt-back')
                  } )
              );
            }}
            isActive={ isActive }
        />
      </ToolbarGroup>
    </BlockControls>
  );
};

registerFormatType('custom-rich-text/underline', {
  title: __('Souligner', 'Gutenberg-back'),
  tagName: 'span',
  className: 'is-underline',
  edit: AddUnderline,
})