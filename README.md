# Janus 

# Installation of janus gateway 

sudo apt-get install libmicrohttpd-dev libjansson-dev libnice-dev libssl-dev libsrtp-dev libsofia-sip-ua-dev libglib2.0-dev libopus-dev libogg-dev libini-config-dev libcollection-dev libwebsockets-dev pkg-config gengetopt automake libtool doxygen graphviz git cmake

sudo apt-get install libavformat-dev

mkdir -p ~/build
cd ~/build
git clone git://github.com/meetecho/janus-gateway.git
cd janus-gateway
sh autogen.sh
./configure --disable-data-channels --disable-websockets --disable-rabbitmq --disable-docs --prefix=/opt/janus LDFLAGS="-L/usr/local/lib -Wl,-rpath=/usr/local/lib" CFLAGS="-I/usr/local/include"

make && sudo make install
sudo make configs


Running ports check
```
 sudo lsof -i  | grep janus
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

## client

Run http server 
```
npm init
npm install http-server
node_modules/http-server/bin/http-server
```

open the client in webrtc supported browser at 
http://192.168.1.111:8080/videoroomtest.html


