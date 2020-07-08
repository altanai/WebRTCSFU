/**
 * Created by IntelliJ IDEA.
 * User: Altanai ( @altanai)
 * Date: 2020, Jan 12
 * Time: 12:54 PM
 * Bright Chats ( https://www.brightchats.com)
 */
var selfvideo = "myAloneVideo";
var remotevideosarr = ["myConferenceVideo", "otherConferenceVideo1", "otherConferenceVideo2",
    "otherConferenceVideo3", "otherConferenceVideo4", "otherConferenceVideo5"];

function getWidgets() {

    var drawwidget = {
        active: true,
        drawCanvasContainer: "drawBoardRow",
        button: {
            id: "draw-webrtc",
            class_on: "amplechat-icon-pencil On",
            html_on: '',
            class_off: "amplechat-icon-pencil Off",
            html_off: ''
        }
    };

    let filesharewidget = {
        active: true,
        fileShareContainer: "fileSharingRow",
        fileshare: {
            rotateicon: "assets/images/refresh-icon.png",
            minicon: "",
            maxicon: "",
            closeicon: "assets/images/cross-icon.png"
        },
        fileListContainer: "fileListingRow",
        filelist: {
            minicon: "",
            maxicon: "",
            downloadicon: "",
            trashicon: "",
            saveicon: "",
            showicon: "",
            hideicon: "",
            stopuploadicon: ""
        },
        button: {
            id: "fileshareBtn",
            class_on: "amplechat-icon-file-share",
            html: "File"
        },
        props: {
            fileShare: "single",   //Can be divided , chat preview  , single   , hidden
            fileList: "single"     //Can be divided , single , hidden
        },
        sendOldFiles: false        // If new participant join conf , or listener join , then should he receive old files or not
    };


    var chatwidget = {
        active: true,
        container: {
            id: "chatContainer"
        },
        inputBox: {
            text_id: "chatInputText",
            sendbutton_id: "chatSendButton",
            minbutton_id: "minimizeChatButton"
        },
        chatBox: {
            id: "chatBoard"
        },
        button: {
            class_on: "btn btn-warning glyphicon glyphicon-font topPanelButton",
            html_on: "Chat",
            class_off: "btn btn-success glyphicon glyphicon-font topPanelButton",
            html_off: "Chat"
        }
    };

    //inactiveSpan
    var screensharewidget = {
        active: webrtcdevobj.issafari ? false : true,
        screenshareContainer: "screenShareRow",
        button: {
            shareButton: {
                id: "scrShareButton",
                class_on: "amplechat-icon-screen-sharing on blink_me",
                html_on: '',
                class_off: "amplechat-icon-screen-sharing off",
                html_off: '',
                class_busy: "amplechat-icon-screen-sharing on blink_me inactiveSpan",
                html_busy: ''
            },
            viewButton: {
                id: "scrViewButton",
                class_on: "screeninstall-btn on",
                html_on: "Stop Viewing",
                class_off: "screeninstall-btn off",
                html_off: "View Screen"
            }
        }
    };

    return {
        debug: false,
        reconnect: {
            active: false
        },
        timer: {
            active: true,
            type: "forward",
            counter: {
                hours: "countdownHours",
                minutes: "countdownMinutes",
                seconds: "countdownSeconds"
            },
            upperlimit: {
                hour: 0,
                min: 3,
                sec: 60
            },
            span: {
                currentTime: "currentTimeArea",
                currentTimeZone: "currentTimeZoneArea",
                remoteTime: ["remoteTimeArea1", "remoteTimeArea2", "remoteTimeArea3", "remoteTimeArea4", "remoteTimeArea5"],
                remoteTimeZone: ["remoteTimeZoneArea1", "remoteTimeZoneArea2", "remoteTimeZoneArea3", "remoteTimeZoneArea4", "remoteTimeZoneArea5"],
                class_on: ""
            },
            container: {
                id: '',
                minbutton_id: 'timerBtn'
            },
            button: {
                id: 'timerBtn'
            }
        },

        chat: chatwidget,

        fileShare: filesharewidget,

        mute: {
            active: true,
            audio: {
                active: true,
                button: {
                    class_on: "pull-right videoButtonClass on",
                    html_on: "<i class='fa fa-microphone-slash'></i>",
                    class_off: "pull-right videoButtonClass off",
                    html_off: "<i class='fa fa-microphone'></i>"
                }
            },
            video: {
                active: false,
                button: {
                    class_on: "pull-right videoButtonClass on",
                    html_on: "<i class='fa fa-video-camera'></i>",
                    class_off: "pull-right videoButtonClass off",
                    html_off: "<i class='fa fa-video-camera'></i>"
                }
            }
        },
        videoRecord: {
            active: true,
            videoRecordContainer: true,
            button: {
                class_on: "pull-right videoButtonClass on blink_me",
                html_on: "<i class='fa fa-circle'></i>",
                class_off: "pull-right videoButtonClass off",
                html_off: "<i class='fa fa-circle'></i>"
            }
        },
        snapshot: {
            active: true,
            snapshotContainer: true,
            button: {
                class_on: "pull-right videoButtonClass",
                html_on: "<i class='fa fa-camera'></i>"
            }
        },
        cursor: {
            active: false,
            pointer: {
                class_on: "fa fa-hand-o-up fa-3x"
            },
            button: {
                id: 'shareCursorButton',
                class_on: "pull-right videoButtonClass On",
                html_on: "<i class='fa fa-hand-pointer-o fullscreen'></i>",
                class_off: "pull-right videoButtonClass Off",
                html_off: "<i class='fa fa-hand-pointer-o fullscreen'></i>"
            }
        },
        minmax: {
            active: true,
            max: {
                button: {
                    id: 'maxVideoButton',
                    class_on: "pull-right videoButtonClass On",
                    html_on: "<i class='fa fa-arrows-alt fullscreen' ></i>",
                    class_off: "pull-right videoButtonClass Off",
                    html_off: "<i class='fa fa-arrows-alt fullscreen'></i>"
                }
            },
            min: {
                button: {
                    id: 'minVideoButton',
                    class_on: "pull-right videoButtonClass On",
                    html_on: "<i class='fa fa-minus'></i>",
                    class_off: "pull-right videoButtonClass Off",
                    html_off: "<i class='fa fa-minus'></i>"
                }
            }
        },
        drawCanvas: drawwidget,
        screenrecord: {
            // active: webrtcdevobj.issafari ? false : true,
            active: false,
            videoRecordContainer: true,
            button: {
                id: "scrRecordBtn",
                class_on: "amplechat-icon-screen-record On",
                html_on: '<i class="fa fa-stop-circle-o" aria-hidden="true"></i>',
                class_off: "amplechat-icon-screen-record Off blink_me",
                html_off: '<i class="fa fa-stop-circle-o" aria-hidden="true"></i>'
            }
        },
        screenshare: screensharewidget,
        listenin: {
            active: false
        },
        help: {
            active: true,
            helpContainer: "help-view-body",
            screenshotContainer: "help-screenshot-body",
            descriptionContainer: "help-description-body"
        },
        statistics: {
            active: false,
            statsConainer: "network-stats-body"
        }
    };
}