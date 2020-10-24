import React from 'react'
import PropTypes from 'proptypes'

const propTypes = {
  sources: PropTypes.arrayOf(PropTypes.object)
}

function ReactAudioPlayer(props) {
  const { sources } = props

  return (
    <div className='react-audio-player'>
      <h1>Player</h1>
      <p>adfadfadsfasdf</p>
      {sources.map((source) => (
        <div>{source}</div>
      ))}
    </div>
  )
}

ReactAudioPlayer.defaultProps = {
  sources: []
}

ReactAudioPlayer.propTypes = propTypes

export default ReactAudioPlayer
