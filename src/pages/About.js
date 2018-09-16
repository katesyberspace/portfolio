import React from 'react'
import InstagramEmbed from 'react-instagram-embed'



class About extends React.Component {

  render(){
    return (
      <div class="page">
        <InstagramEmbed
          url='https://www.instagram.com/p/BmFrVS0n6Sv/'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />

      </div>
    )
  }

}


export default About