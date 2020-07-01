## Echo Test 

transceiver added : Add track 
```shell script
getTransceivers()[0]:{
  mid:null,
  sender:{
    track:'default',
    streams:['fMb9VPHJbgSIbKYf2NjM3eILh1qcKLBhUybh'],
  },
  receiver:{
    track:'94aaa442-3375-409f-ac9c-a2aa8b74bb84',
    streams:[],
  },
  stopped:false,
  direction:'sendrecv',
  currentDirection:null,
}
```

createLocalDataChannel
label: JanusDataChannel, reliable: true

createOffer
options: {offerToReceiveVideo: -1, offerToReceiveAudio: -1, voiceActivityDetection: true, iceRestart: false}

createoffer and set local ddscription 

type: offer, sdp: v=0
o=- 656173682634129825 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0 1 2
a=msid-semantic: WMS HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R
m=audio 9 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:UaFT
a=ice-pwd:HcpOm3blSwX3f3cW28/+FrSM
a=ice-options:trickle
a=fingerprint:sha-256 44:41:FB:49:A3:DE:49:67:A5:58:0C:BF:AB:F1:11:A4:C3:CC:C6:84:13:39:11:B7:5A:6C:59:C8:80:0A:75:F2
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendrecv
a=msid:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R fed1b951-a55f-43e4-91b3-ee9cb0207618
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
a=ssrc:2765441273 cname:Ptf9iZZUeJQlse9D
a=ssrc:2765441273 msid:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R fed1b951-a55f-43e4-91b3-ee9cb0207618
a=ssrc:2765441273 mslabel:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R
a=ssrc:2765441273 label:fed1b951-a55f-43e4-91b3-ee9cb0207618
m=video 9 UDP/TLS/RTP/SAVPF 96 97 98 99 100 101 102 122 127 121 125 107 108 109 124 120 123
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:UaFT
a=ice-pwd:HcpOm3blSwX3f3cW28/+FrSM
a=ice-options:trickle
a=fingerprint:sha-256 44:41:FB:49:A3:DE:49:67:A5:58:0C:BF:AB:F1:11:A4:C3:CC:C6:84:13:39:11:B7:5A:6C:59:C8:80:0A:75:F2
a=setup:actpass
a=mid:1
a=extmap:14 urn:ietf:params:rtp-hdrext:toffset
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:13 urn:3gpp:video-orientation
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:12 http://www.webrtc.org/experiments/rtp-hdrext/playout-delay
a=extmap:11 http://www.webrtc.org/experiments/rtp-hdrext/video-content-type
a=extmap:7 http://www.webrtc.org/experiments/rtp-hdrext/video-timing
a=extmap:8 http://tools.ietf.org/html/draft-ietf-avtext-framemarking-07
a=extmap:9 http://www.webrtc.org/experiments/rtp-hdrext/color-space
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendrecv
a=msid:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R 34bcd082-45eb-4a46-8040-5f1dcd6a3500
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=rtpmap:98 VP9/90000
a=rtcp-fb:98 goog-remb
a=rtcp-fb:98 transport-cc
a=rtcp-fb:98 ccm fir
a=rtcp-fb:98 nack
a=rtcp-fb:98 nack pli
a=fmtp:98 profile-id=0
a=rtpmap:99 rtx/90000
a=fmtp:99 apt=98
a=rtpmap:100 VP9/90000
a=rtcp-fb:100 goog-remb
a=rtcp-fb:100 transport-cc
a=rtcp-fb:100 ccm fir
a=rtcp-fb:100 nack
a=rtcp-fb:100 nack pli
a=fmtp:100 profile-id=2
a=rtpmap:101 rtx/90000
a=fmtp:101 apt=100
a=rtpmap:102 H264/90000
a=rtcp-fb:102 goog-remb
a=rtcp-fb:102 transport-cc
a=rtcp-fb:102 ccm fir
a=rtcp-fb:102 nack
a=rtcp-fb:102 nack pli
a=fmtp:102 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42001f
a=rtpmap:122 rtx/90000
a=fmtp:122 apt=102
a=rtpmap:127 H264/90000
a=rtcp-fb:127 goog-remb
a=rtcp-fb:127 transport-cc
a=rtcp-fb:127 ccm fir
a=rtcp-fb:127 nack
a=rtcp-fb:127 nack pli
a=fmtp:127 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42001f
a=rtpmap:121 rtx/90000
a=fmtp:121 apt=127
a=rtpmap:125 H264/90000
a=rtcp-fb:125 goog-remb
a=rtcp-fb:125 transport-cc
a=rtcp-fb:125 ccm fir
a=rtcp-fb:125 nack
a=rtcp-fb:125 nack pli
a=fmtp:125 level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f
a=rtpmap:107 rtx/90000
a=fmtp:107 apt=125
a=rtpmap:108 H264/90000
a=rtcp-fb:108 goog-remb
a=rtcp-fb:108 transport-cc
a=rtcp-fb:108 ccm fir
a=rtcp-fb:108 nack
a=rtcp-fb:108 nack pli
a=fmtp:108 level-asymmetry-allowed=1;packetization-mode=0;profile-level-id=42e01f
a=rtpmap:109 rtx/90000
a=fmtp:109 apt=108
a=rtpmap:124 red/90000
a=rtpmap:120 rtx/90000
a=fmtp:120 apt=124
a=rtpmap:123 ulpfec/90000
a=ssrc-group:FID 3212762677 129946697
a=ssrc:3212762677 cname:Ptf9iZZUeJQlse9D
a=ssrc:3212762677 msid:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R 34bcd082-45eb-4a46-8040-5f1dcd6a3500
a=ssrc:3212762677 mslabel:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R
a=ssrc:3212762677 label:34bcd082-45eb-4a46-8040-5f1dcd6a3500
a=ssrc:129946697 cname:Ptf9iZZUeJQlse9D
a=ssrc:129946697 msid:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R 34bcd082-45eb-4a46-8040-5f1dcd6a3500
a=ssrc:129946697 mslabel:HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R
a=ssrc:129946697 label:34bcd082-45eb-4a46-8040-5f1dcd6a3500
m=application 9 UDP/DTLS/SCTP webrtc-datachannel
c=IN IP4 0.0.0.0
a=ice-ufrag:UaFT
a=ice-pwd:HcpOm3blSwX3f3cW28/+FrSM
a=ice-options:trickle
a=fingerprint:sha-256 44:41:FB:49:A3:DE:49:67:A5:58:0C:BF:AB:F1:11:A4:C3:CC:C6:84:13:39:11:B7:5A:6C:59:C8:80:0A:75:F2
a=setup:actpass
a=mid:2
a=sctp-port:5000
a=max-message-size:262144


transceiverModified
Caused by: setLocalDescription

getTransceivers()[0]:{
  mid:'0',
  sender:{
    track:'default',
    streams:['HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R'],
  },
  receiver:{
    track:'f2ab39b7-16df-4a56-a033-6b117567cb38',
    streams:[],
  },
  stopped:false,
  direction:'sendrecv',
  currentDirection:null,
}

icegatherinig and 	
icecandidate 

setRemoteDescription
type: answer, sdp: v=0
o=- 656173682634129825 2 IN IP4 54.193.51.199
s=-
t=0 0
a=group:BUNDLE 0 1
a=msid-semantic: WMS janus
m=audio 9 UDP/TLS/RTP/SAVPF 111
c=IN IP4 54.193.51.199
a=sendrecv
a=mid:0
a=rtcp-mux
a=ice-ufrag:3nJv
a=ice-pwd:fMLUd/+kzBmyAR7glLTe6r
a=ice-options:trickle
a=fingerprint:sha-256 72:1D:74:53:29:E0:14:E8:CC:B8:BE:9A:BD:5A:14:F5:19:1D:0C:FE:10:18:8F:D1:BB:40:FE:E8:63:1F:A7:A8
a=setup:active
a=rtpmap:111 opus/48000/2
a=ssrc:1277462554 cname:janusaudio
a=ssrc:1277462554 msid:janus janusa0
a=ssrc:1277462554 mslabel:janus
a=ssrc:1277462554 label:janusa0
a=candidate:1 1 udp 2013266431 54.193.51.199 42772 typ host
a=end-of-candidates
m=video 9 UDP/TLS/RTP/SAVPF 96
c=IN IP4 54.193.51.199
a=sendrecv
a=mid:1
a=rtcp-mux
a=ice-ufrag:3nJv
a=ice-pwd:fMLUd/+kzBmyAR7glLTe6r
a=ice-options:trickle
a=fingerprint:sha-256 72:1D:74:53:29:E0:14:E8:CC:B8:BE:9A:BD:5A:14:F5:19:1D:0C:FE:10:18:8F:D1:BB:40:FE:E8:63:1F:A7:A8
a=setup:active
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtcp-fb:96 goog-remb
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=ssrc:1384021866 cname:janusvideo
a=ssrc:1384021866 msid:janus janusv0
a=ssrc:1384021866 mslabel:janus
a=ssrc:1384021866 label:janusv0
a=candidate:1 1 udp 2013266431 54.193.51.199 42772 typ host
a=end-of-candidates
m=application 0 UDP/DTLS/SCTP 0
c=IN IP4 54.193.51.199
a=inactive

transceiverModified
Caused by: setRemoteDescription

getTransceivers()[0]:{
  mid:'0',
  sender:{
    track:'default',
    streams:['HPdzGpxPUqGIobV9fgMLt5IzAZUX26D9Io5R'],
  },
  receiver:{
    track:'f2ab39b7-16df-4a56-a033-6b117567cb38',
    streams:['janus'],
  },
  stopped:false,
  direction:'sendrecv',
  currentDirection:'sendrecv',
}



