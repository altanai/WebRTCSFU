# Janus 

# Installation of janus gateway 

```
sudo apt-get install libavformat-dev

mkdir -p ~/build
cd ~/build
git clone git://github.com/meetecho/janus-gateway.git
cd janus-gateway
sh autogen.sh
./configure --disable-data-channels --disable-websockets --disable-rabbitmq --disable-docs --prefix=/opt/janus LDFLAGS="-L/usr/local/lib -Wl,-rpath=/usr/local/lib" CFLAGS="-I/usr/local/include"

make && sudo make install
sudo make configs
```

## SSL certs 

Make a new directory for SSL certs
```shell script
mkdir /home/ubuntu/ssl
```

genarte certs 
```shell script
openssl req -new -newkey rsa:4096 -nodes -keyout key.pem -out cert.csr
openssl x509 -req -sha256 -days 365 -in cert.csr -signkey key.pem -out cert.pem
chmod 600 cert.csr
chmod 600 cert.pem
chmod 600 key.pem
```

Update janus config 

goto installation location for janus config 
```shell script
cd /opt/janus/etc/janus/
```
and add path for certs and key pem files 
```shell script
> vi janus.jcfg

certificates: {
        #cert_pem = "/path/to/certificate.pem"
        #cert_key = "/path/to/key.pem"
        cert_pem = "/home/ubuntu/ssl/cert.pem"
        cert_key = "/home/ubutu/ssl/key.pem"
        #cert_pwd = "secretpassphrase"
        #dtls_accept_selfsigned = false
        #dtls_ciphers = "your-desired-openssl-ciphers"
        #rsa_private_key = false
}
```
there are options for other ciphers and passphrass , leave them for now

Also update conf janus.transport.http.jcfg 
 
In general section set https to true vor 8089 port
```shell script
general: {
        #events = true                                  # Whether to notify event handlers about transport events (default=true)
        json = "indented"                               # Whether the JSON messages should be indented (default),
                                                                        # plain (no indentation) or compact (no indentation and no spaces)
        base_path = "/janus"                    # Base path to bind to in the web server (plain HTTP only)
        http = true                                             # Whether to enable the plain HTTP interface
        port = 8088                                             # Web server HTTP port
        #interface = "eth0"                             # Whether we should bind this server to a specific interface only
        #ip = "192.168.0.1"                             # Whether we should bind this server to a specific IP address (v4 or v6) only
        https = true                                    # Whether to enable HTTPS (default=false)
        secure_port = 8089                              # Web server HTTPS port, if enabled
        #secure_interface = "eth0"              # Whether we should bind this server to a specific interface only
        #secure_ip = "192.168.0.1"              # Whether we should bind this server to a specific IP address (v4 or v6) only
        #acl = "127.,192.168.0."                # Only allow requests coming from this comma separated list of addresses
}
```

In certificate section set path for ssl certs
```shell script
certificates: {
        cert_pem = /home/ubuntu/ssl/cert.pem
        cert_key = /home/ubuntu/ssl/key.pem
        #cert_pem = "/path/to/cert.pem"
        #cert_key = "/path/to/key.pem"
        #cert_pwd = "secretpassphrase"
        #ciphers = "PFS:-VERS-TLS1.0:-VERS-TLS1.1:-3DES-CBC:-ARCFOUR-128"
}
```
## check

Running ports check ( http ) 
```
> sudo lsof -i  | grep janus
janus     26450            root    7u  IPv6 418550      0t0  UDP *:rfe 
janus     26450            root    8u  IPv6 418551      0t0  UDP *:5004 
janus     26450            root   17u  IPv6 418557      0t0  TCP *:omniorb (LISTEN)
janus     26450            root   20u  IPv6 418600      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23486 (ESTABLISHED)
janus     26450            root   22u  IPv6 418623      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23525 (ESTABLISHED)
janus     26450            root   23u  IPv6 418628      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23544 (ESTABLISHED)
janus     26450            root   25u  IPv6 418630      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23553 (ESTABLISHED)
janus     26450            root   26u  IPv6 418632      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23551 (ESTABLISHED)
janus     26450            root   27u  IPv6 418634      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23552 (ESTABLISHED)
janus     26450            root   28u  IPv6 418636      0t0  TCP ip-172-31-13-206.us-west-1.compute.internal:omniorb->59.89.176.85:23557 (ESTABLISHED)
janus     26450            root   30u  IPv4 418639      0t0  UDP ip-172-31-13-206.us-west-1.compute.internal:40163 

```




## Janus INFO

http://x.x.x.x:8088/janus/info</p>
```
   "janus": "server_info",
   "transaction": "rGuo8HNI4wu",
   "name": "Janus WebRTC Gateway",
   "version": 26,
   "version_string": "0.2.6",
   "author": "Meetecho s.r.l.",
   "commit-hash": "not-a-git-repo",
   "compile-time": "Wed Feb 28 07:02:15 UTC 2018",
   "log-to-stdout": true,
   "log-to-file": false,
   "data_channels": false,
   "session-timeout": 60,
   "server-name": "MyJanusInstance",
   "local-ip": "172.31.13.206",
   "ipv6": false,
   "ice-lite": false,
   "ice-tcp": false,
   "api_secret": false,
   "auth_token": false,
   "event_handlers": false,
   "transports": {
      "janus.transport.http": {
         "name": "JANUS REST (HTTP/HTTPS) transport plugin",
         "author": "Meetecho s.r.l.",
         "description": "This transport plugin adds REST (HTTP/HTTPS) support to the Janus API via libmicrohttpd.",
         "version_string": "0.0.2",
         "version": 2
      },
      "janus.transport.websockets": {
         "name": "JANUS WebSockets transport plugin",
         "author": "Meetecho s.r.l.",
         "description": "This transport plugin adds WebSockets support to the Janus API via libwebsockets.",
         "version_string": "0.0.1",
         "version": 1
      }
   },
   "events": {},
   "plugins": {
      "janus.plugin.voicemail": {
         "name": "JANUS VoiceMail plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a plugin implementing a very simple VoiceMail service for Janus, recording Opus streams.",
         "version_string": "0.0.6",
         "version": 6
      },
      "janus.plugin.audiobridge": {
         "name": "JANUS AudioBridge plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a plugin implementing an audio conference bridge for Janus, mixing Opus streams.",
         "version_string": "0.0.10",
         "version": 10
      },
      "janus.plugin.echotest": {
         "name": "JANUS EchoTest plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a trivial EchoTest plugin for Janus, just used to showcase the plugin interface.",
         "version_string": "0.0.7",
         "version": 7
      },
      "janus.plugin.recordplay": {
         "name": "JANUS Record&amp;Play plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a trivial Record&amp;Play plugin for Janus, to record WebRTC sessions and replay them.",
         "version_string": "0.0.4",
         "version": 4
      },
      "janus.plugin.textroom": {
         "name": "JANUS TextRoom plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a plugin implementing a text-only room for Janus, using DataChannels.",
         "version_string": "0.0.2",
         "version": 2
      },
      "janus.plugin.videoroom": {
         "name": "JANUS VideoRoom plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a plugin implementing a videoconferencing SFU (Selective Forwarding Unit) for Janus, that is an audio/video router.",
         "version_string": "0.0.9",
         "version": 9
      },
      "janus.plugin.sipre": {
         "name": "JANUS SIPre plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a simple SIP plugin for Janus (based on libre instead of Sofia), allowing WebRTC peers to register at a SIP server and call SIP user agents through the gateway.",
         "version_string": "0.0.1",
         "version": 1
      },
      "janus.plugin.videocall": {
         "name": "JANUS VideoCall plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a simple video call plugin for Janus, allowing two WebRTC peers to call each other through the gateway.",
         "version_string": "0.0.6",
         "version": 6
      },
      "janus.plugin.streaming": {
         "name": "JANUS Streaming plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a streaming plugin for Janus, allowing WebRTC peers to watch/listen to pre-recorded files or media generated by gstreamer.",
         "version_string": "0.0.8",
         "version": 8
      },
      "janus.plugin.nosip": {
         "name": "JANUS NoSIP plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a simple RTP bridging plugin that leaves signalling details (e.g., SIP) up to the application.",
         "version_string": "0.0.1",
         "version": 1
      },
      "janus.plugin.sip": {
         "name": "JANUS SIP plugin",
         "author": "Meetecho s.r.l.",
         "description": "This is a simple SIP plugin for Janus, allowing WebRTC peers to register at a SIP server and call SIP user agents through the gateway.",
         "version_string": "0.0.7",
         "version": 7
      }
   }
}
```

## Debugging

**Issue1**  undefined symbol: srtp_crypto_policy_set_aes_gcm_256_16_auth
\
**solution** append to LD_libarry_path
```
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/usr/lib
```

**Issue2** Missing or broken dependencies 
\
**solution**
```
sudo apt-get install libmicrohttpd-dev libjansson-dev libnice-dev libssl-dev libsrtp-dev libsofia-sip-ua-dev libglib2.0-dev libopus-dev libogg-dev libini-config-dev libcollection-dev libwebsockets-dev pkg-config gengetopt automake libtool doxygen graphviz git cmake</pre>
```

**Issue 3** Unable to start janus web server on 8080 with default config  
```
 [transports/janus_http.c:janus_http_init:752] Couldn't start webserver on port 8088..
```
\
**solution** since this could be due to various issues , pin point the issue first using log level 7 such as 
```shell script
janus -d 7 --interface=x.x.x.x  --nat-1-1=x.x.x.x -C janus.transport.http.jcfg 
```

**Issue 4** Missing transport 
```shell script
[FATAL] [janus.c:main:4348] No Janus API transport is available... enable at least one and restart Janus
```
\
**solution** In the general section of janus.jcfg check is the provider location of folder have valid files in them , for exmaple 
```shell script
[general]
configs_folder = /etc/janus                     ; Configuration files folder
plugins_folder = /usr/lib/x86_64-linux-gnu/janus/plugins                ; Plugins folder
transports_folder = /usr/lib/x86_64-linux-gnu/janus/transports  ; Transports folder
events_folder = /usr/lib/x86_64-linux-gnu/janus/events                  ; Event handlers folder
```
list transport 
```shell script
ls /usr/lib/x86_64-linux-gnu/janus/transports
libjanus_http.so    libjanus_http.so.0.0.0  libjanus_pfunix.so.0      libjanus_rabbitmq.so    libjanus_rabbitmq.so.0.0.0  libjanus_websockets.so.0
libjanus_http.so.0  libjanus_pfunix.so      libjanus_pfunix.so.0.0.0  libjanus_rabbitmq.so.0  libjanus_websockets.so      libjanus_websockets.so.0.0.0

```


**Issue5** Inavlid URL Errro on echo test
```shell script
 [ERR] [transports/janus_http.c:janus_http_handler:1191] Invalid url /ws/v1/cluster/apps/new-application
```

**Issue6** missing files 
```shell script
[ERR] [plugins/janus_streaming.c:janus_streaming_init:896] Can't add 'live' stream, no such file '/usr/share/janus/streams/radio.alaw'
[ERR] [plugins/janus_streaming.c:janus_streaming_init:961] Can't add 'ondemand' stream, no such file '/usr/share/janus/streams/music.mulaw'...
```

**Issue7** Error on Datachannel
```shell script
Got error on data channel: RTCErrorEvent {isTrusted: true, error: RTCError: Transport channel closed, type: "error", target: RTCDataChannel, currentTarget: RTCDataChannel, …}
```

## client

Run http server 
```
npm init
npm install http-server
node_modules/http-server/bin/http-server
```

open the client in webrtc supported browser at 
http://192.168.1.111:8080/videoroomtest.html

## Git 

Merginng the upstream rpo changes into this repo
```shell script
git pull https://github.com/AmpleChat/Janus_experiments.git MCU
```
