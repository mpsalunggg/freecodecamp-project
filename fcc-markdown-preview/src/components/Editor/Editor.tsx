import { Fragment } from 'react/jsx-runtime'
import { TextArea } from './Editor.styles'
import { useMarkdown } from '../../context/markdownContext'

const Editor = () => {
  const { markdown, handleChange } = useMarkdown()
  return (
    <Fragment>
      <TextArea
        id="editor"
        value={markdown}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Type markdown here..."
      />
    </Fragment>
  )
}

export default Editor
