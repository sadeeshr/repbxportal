import SIP from 'sip.js';

class sipjs {
    constructor() {
        this.userAgent = null;
        this.session = null;
        this.timer = null;
        this.defaultProps = {};
        this.dtmfOpt = {
            'duration': 160,
            'interToneGap': 1200
        };
    }

    updateStatus = (data) => {
        console.log(data);
        // return dispatch({
        //     type: data
        // });
        // this.props.apRegStatus(this.config);
    }

    doConnect = (props, config) => {
        console.log(props);
        this.defaultProps = props;
        let ua = new SIP.UA(config);
        this.userAgent = ua;
        //
        ua.start();
        ua.on('connecting', () => this.defaultProps.apDialerStatus('CONNECTING'));
        ua.on('connected', () => this.defaultProps.apDialerStatus('CONNECTED'));
        ua.on('disconnected', () => this.defaultProps.apDialerStatus('DISCONNECTED'));
        ua.on('registered', () => this.defaultProps.apDialerStatus('REGISTERED'));
        ua.on('unregistered', (res, cause) => this.updateStatus(cause));
        ua.on('registrationFailed', (res, cause) => this.updateStatus(cause));
        ua.on('invite', sess => this.updateStatus(sess));
        ua.on('message', mesg => this.updateStatus(mesg));
    }

    doRegister = () => this.userAgent.register();

    doUnRegister = () => this.userAgent.unregister();

    doCall = (uri, options) => {

        this.defaultProps.apDialerStatus('TRYING');

        let render = {
            local: document.getElementById('localMedia'),
            remote: document.getElementById('remoteMedia')
        };

        console.log(uri, render, options);

        var session = this.userAgent.invite(uri, options);
        this.session = session;

        session.on('accepted', res => { this.defaultProps.apDialerStatus('TALKING'); this.timer = setInterval(this.defaultProps.incCalltimer, 1000); session.mediaHandler.render(render); });
        session.on('progress', res => this.defaultProps.apDialerStatus('RINGING'));
        session.on('rejected', (res, cause) => this.updateStatus(cause));
        session.on('failed', (res, cause) => this.updateStatus(cause));
        session.on('terminated', (res, cause) => this.updateStatus(cause));
        session.on('cancel', _ => this.updateStatus('Cancelled'));
        session.on('refer', req => this.updateStatus(req));
        session.on('replaced', sess => this.updateStatus(sess));
        session.on('dtmf', (req, dtmf) => this.updateStatus(dtmf));
        session.on('muted', _ => this.updateStatus('Muted'));
        session.on('unmuted', _ => this.updateStatus('UnMuted'));
        session.on('bye', req => { clearInterval(this.timer) });

    };

    cancelCall = () => this.session.cancel();
    endCall = () => this.session ? this.session.terminate() : "No Active Session";
    sendDtmf = (dtmf) => this.session.dtmf(dtmf, this.dtmfOpt);
    muteCall = () => this.session.mute();
    unmuteCall = () => this.session.unmute();

}

const sip = new sipjs();
export default sip;