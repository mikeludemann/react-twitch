# react-twitch

React Twitch Component

## Properties

### Facebook

|Key|Value|Type|
|:--|:----|:---|
|twitchProperties|All possible properties|Object|

## Example

```JS
let data = {
  width: 840,
  height: 480,
  channel: "yourname",
  layout: "video", /* Otherwise: video-with-chat */
  allowfullscreen: "true" /* Otherwise: false */
  autoplay: false,
  theme: "light",  /* Otherwise: dark */
  time: "0h0m0s", /* Time where these video playback start */
  muted: false,  /* Otherwise: true */
  video: "0123456789", /* ID of these Video */
  collection: { video: "0123456789", collection: "AbCdEfGhIj" },
  parent: ["blog.example.com", "gamer.example.com"]
};

<Twitch twitchProperties={data}></Twitch>
```