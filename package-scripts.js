const npsUtils = require('nps-utils');

module.exports = {
    scripts: {
        default: 'echo "Does nothing!"',
        deploy: 'push-to-git -m -t g_benjamin_jesuiter1@git.balena-cloud.com:g_benjamin_jesuiter1/rtmpstreamclient.git',
        rtmp: {
            build: 'docker build -t rtmp-server ./rtmp-server/',
            run: 'docker run -it --rm --name rtmp -p 80:80 rtmp-server'
        },
        vlc: {
            build: 'docker build -t vlc-client ./vlc-client/',
            run: 'docker run -it --rm --name vlc -e DISPLAY=localhost:1 vlc-client'
        }
    },
};