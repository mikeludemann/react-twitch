import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Twitch extends Component {
	componentDidMount(){
		var js = document.createElement("script");
		js.setAttribute("src", "https://embed.twitch.tv/embed/v1.js");
		document.getElementsByTagName("body").item(0).appendChild(js);

		var jsmain = document.createElement("script");
		jsmain.innerHTML= 'var embed = new Twitch.Embed("twitch-embed", ' + this.props.twitchProperties + ' );';
		document.getElementsByTagName("body").item(0).appendChild(jsmain);

		var jsmain2 = document.createElement("script");
		jsmain2.innerHTML= `
			embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
				var player = embed.getPlayer();
				player.play();
			});
		`;
		document.getElementsByTagName("body").item(0).appendChild(jsmain2);
	}
	render() {
		return (
			<div id="twitch-embed"></div>
		);
	}
}

Twitch.propTypes = {
	twitchProperties: PropTypes.object.isRequired
}

// ------------------------------------------------------------------------------------

export {
	Twitch
}
