import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
  render() {
    const { tweet } = this.props

    if (tweet === null){
      return <p>This Tweet doesn't exists</p>
    }

    return (
      <div className='tweet'>
        
      </div>
    )
  }
}

// The {id} in mapStateToProps is the prop that is passing from the dashboard id={id}, so the functions second argument from mapStateToProps will be an object that has an id property with this value
function mapStateToProps ({ authedUser, users, tweets }, { id }) {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null

  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  }
}

export default connect(mapStateToProps)(Tweet)