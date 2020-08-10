/**
 * Created by IntelliJ IDEA.
 * User: Altanai ( @altanai)
 * Date: 2020
 * Time: 12:54 PM
 * Ample Chats ( www.amplechat.com)
 */
var role = "participant", out_A = true, out_V = true;
var local, remote, incoming, outgoing;
var webrtcdevobj = null;
var webrtcdevsessionobj, sessionid, session;

function adjustConfvideos(vid) {

    let vidname = vid.getAttribute("name");
    console.log("vidname ", vidname);
    //myAloneVideo
    if (vidname == "myAloneVideo") return;

    vid.removeAttribute("hidden");
    console.log("vid.parentNode.parentNode", vid.parentNode.parentNode);
    vid.parentNode.parentNode.removeAttribute("hidden");
    vid.parentNode.parentNode.parentNode.removeAttribute("hidden");

    var activeRemoteVideosCount = 0;
    for (x in webrtcdevobj.remoteVideos) {
        if (webrtcdevobj.remoteVideos[x].video) {
            activeRemoteVideosCount++;
        }
    }

    document.getElementById("widget_centralarea").removeAttribute("hidden");
    if (activeRemoteVideosCount < 3) {
        document.getElementById("remote_sidebar_right").removeAttribute("hidden");
        document.getElementById("widget_centralarea").className = "col-10";
    } else {
        document.getElementById("remote_sidebar_left").removeAttribute("hidden");
        document.getElementById("widget_centralarea").className = "col-8";
    }
}

for (vindex in document.getElementsByClassName("video-class")) {
    let vid = document.getElementsByClassName("video-class")[vindex];

    if (vid && vid.nodeName == "VIDEO") {
        vid.onplay = function () {
            adjustConfvideos(vid);
        };
        // if (vid.played.length > 0) adjustConfvideos(vid);
    }
}

function adjustelement() {
    try {

        // on change of file sharing container , put the image src in popup modal
        $('.filesharingWidget-single, .filesharingWidget-divided').bind('DOMSubtreeModified', function (event) {
            $(this).find("img").click(function (e) {
                let fileImge = $(this).attr('src');
                $("#modal-file-image").attr('src', fileImge);
                $('#file-modal').modal('show');
            });
        });

        if (document.getElementById("ListenInButton"))
            document.getElementById("ListenInButton").style.display = "none";

        if (document.getElementById("scrRecordBtn"))
            document.getElementById("scrRecordBtn").style.display = "none";

    } catch (e) {
        console.error(e)
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#image_upload_preview1').attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Initiliase objects for the webrtc DOM

$(window).on('load', function () {

    // $("#listenin").load("listenin.html",_=>{
    //     console.log("listen loaded ");
    // });

    // $("#cursor").load("cursor.html",_=>{
    //     console.log("cursor loaded ");
    // });

    let p1 = new Promise(resolve => {
        $("#header").load("header.html", _ => {
            resolve();
        });
    });

    let p2 = new Promise(resolve => {
        $("#footer").load("footer.html", _ => {
            resolve();
        });
    });

    let p3 = new Promise(resolve => {
        $("#chat").load("chat.html", _ => {
            resolve();
        });
    });

    let p4 = new Promise(resolve => {
        $("#help").load("help.html", _ => {
            resolve();
        });
    });

    let p5 = new Promise(resolve => {
        $("#fileShare").load("file.html", _ => {
            resolve();
        });
    });

    let p6 = new Promise(resolve => {
        $("#draw").load("draw.html", _ => {
            resolve();
        });
    });

    let p7 = new Promise(resolve => {
        $("#screenShare").load("screen.html", _ => {
            resolve();
        });
    });

    adjustelement();

    Promise.all([p1, p2, p3, p4, p5, p6, p7]).then(_ => {
        console.log(" All promisesresolve(); done ");
    }).then(_ => {

        let paramsurl2 = window.location.hash.split("?")[1];
        let searchParams = new URLSearchParams(paramsurl2);

        if (searchParams.has('audio') && searchParams.get('audio') == "0") {
            out_A = false;
        } else {
            out_A = true;
        }

        if (searchParams.has('video') && searchParams.get('video') == "0") {
            out_V = false;
        } else {
            out_V = true;
        }

        if (searchParams.has('name')) {
            username = searchParams.get('name');
        } else {
            username = "LOCAL";
        }

        if (searchParams.has('email')) {
            useremail = searchParams.get('email');
        } else {
            useremail = "abc@gmail.com";
        }

        role = gup("role", window.location.url);
        return role;

    }).then(function () {

        switch (role) {
            case "inspector":
                var overlayDiv = document.createElement("div");
                overlayDiv.className = "overlay";
                document.body.appendChild(overlayDiv);

                document.title = "Inspector - Ample Chat";
                break;

            case "admin":
                // TBD
                break;

            case "participant":
            case "host":
                role = "participant";
                break;

            case "guest":
                console.log(" Role is guest , will not be communication status api to sever ");
                role = "guest";
                break;

            default:
                role = "participant";
                break;
        }
        console.log(" Role ", role );
        return role;

    }).then((result) => {
        local = {
            video: selfvideo,
            videoClass: "video-class",
            videoContainer: "singleVideoContainer",
            userDisplay: true,
            userMetaDisplay: false,
            userdetails: {
                username: username,
                usercolor: '#B5B9E7',
                useremail: useremail,
                role: role
            }
        };

        remote = {
            videoarr: remotevideosarr,
            videoClass: "video-class",
            maxAllowed: 100,
            videoContainer: "remote_sidebar_right",
            userDisplay: true,
            userMetaDisplay: false,
            dynamicVideos: false,
            userdetails: {
                username: 'REMOTE',
                usercolor: '#5c66bf',
                useremail: 'unknown'
            }
        };

        incoming = {
            audio: true,
            video: true,
            data: true,
            screen: true
        };

        outgoing = {
            audio: out_A,
            video: out_V,
            data: true,
            screen: true
        };

        webrtcdevobj = new webrtcdevcon();
        console.log(" webrtceev obj ", webrtcdevobj);
        return webrtcdevobj;

    }).then((webrtcdevobj) => {
        sessionid = webrtcdevobj.makesessionid("noreload");
        return sessionid;

        // }).then((sessionid) => {
        //
        //     validateToken(role, useremail, sessionid);
        //     return sessionid;

    }).then((sessionid) => {

        session = {
            sessionid: sessionid,
            socketAddr: webrtcserver,
            signaller: signallerserver,
            turn: {
                active: true,
                iceServers: iceservers_array
            }
        };
        webrtcdevsessionobj = webrtcdevobj.setsession(local, remote, incoming, outgoing, session, getWidgets());
        return webrtcdevsessionobj;

    }).then((webrtcdevsessionobj) => {
        webrtcdevobj.startCall(webrtcdevsessionobj);
    }).catch(err => {
        console.error('Handle rejected promise (' + err + ')');
    });

});

window.addEventListener('webrtcdev', eventHandler, false);

function eventHandler(e) {
    let action = e.detail.action;
    console.log(" event handler ", action);
    switch (e.detail.servicetype) {
        case "session":
            switch (action) {
                case "onLocalConnect" :
                    if (webrtcdevobj.getwebcallpeers().length > 1) {
                        break;
                    }

                    document.getElementById("singleVideoContainer").removeAttribute("hidden");
                    document.getElementById("remote_sidebar_left").setAttribute("hidden", true);
                    document.getElementById("remote_sidebar_right").setAttribute("hidden", true);
                    document.getElementById("widgetbar").setAttribute("hidden", true);
                    // var myAloneVideo = document.getElementsByName("myAloneVideo")[0];
                    // var isPlaying = myAloneVideo.currentTime > 0 && !myAloneVideo.paused && !myAloneVideo.ended
                    //     && myAloneVideo.readyState > 2;
                    // if (!isPlaying) {
                    //     myAloneVideo.play();
                    // }

                    break;

                case "onSessionConnect" :
                    openwidgesbox();
                    adjustelement();

                    document.getElementById("widgetbar").removeAttribute("hidden");
                    document.getElementById("widgetbar").setAttribute("style", "pointer-events: all;");

                    document.getElementById("singleVideoContainer").setAttribute("hidden", true);

                    // start session timer if not already started
                    if (!$("#datetimestamp").text()) {
                        $("#datetimestamp").text(getUserDateTime(webrtcdevobj.getwebcallpeers()[0].zone));
                    }

                    break;

                case "onNoCameraCard":
                    alert("Camera not found , please refresh the screen. Or goto chrome://settings/content/camera." +
                        "If you do not have a camera, press cancel to continue without video stream ");
                    break;
            }
            break;

        case "file":
            adjustelement();
            switch (action) {
                case "onFileShareStart" :
                    openfilebox();
                    break;
                case "onFileShareEnded":
                    break;
                case "onFileListed":
                    openfilebox();
                    break;
            }
            break;

        case "screenshare":
            var sbtn = document.getElementById("scrShareButton");
            switch (action) {
                case "onScreenShareStarted" :
                    openscreensharebox();
                    // sbtn.classList.add("inactiveSpan");
                    break;
                case "onScreenShareEnded":
                    closescreensharebox();
                    // sbtn.classList.remove("inactiveSpan");
                    break;
            }
            break;

        case "chat":
            switch (action) {
                case "onchat":
                    openchat();
                    break;
            }
            break;

        case "drawboard":
            switch (action) {
                case "onDrawBoardActive":
                    opendrawbox();
                    break;
                case "onDrawBoardTerminate":
                    //closedrawbox();
                    break;
            }
            break;

        default :
            break;
    }
}
