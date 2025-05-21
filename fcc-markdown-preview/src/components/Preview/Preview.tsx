import { Fragment } from 'react/jsx-runtime'
import { PreviewContainer } from './Preview.styles'
import { useMarkdown } from '../../context/markdownContext'

const Preview = () => {
  const { html } = useMarkdown()
  return (
    <Fragment>
      <PreviewContainer
        id="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Fragment>
  )
}

export default Preview
