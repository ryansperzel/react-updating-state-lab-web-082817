// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }

  handleBitrate(e) {
    this.setState({
        settings: {
          ...this.state.settings,
          bitrate: 12
      }
    })
  }

  handleResolution(e) {
    this.setState({
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button type="button" className="bitrate" onClick={this.handleBitrate.bind(this)}>{this.state.settings.bitrate}</button>
        <button type="button" className="resolution" onClick={this.handleResolution.bind(this)}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
