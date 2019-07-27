const npsUtils = require('nps-utils');

module.exports = {
    scripts: {
        default: 'echo "Does nothing!"',
        rtmp: {
            build: 'docker build -t rtmp-server ./rtmp-server/',
            run: 'docker run -it --rm --name rtmp -p 80:80 rtmp-server'
        }
    },
};