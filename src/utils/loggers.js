function requestLogger(req, res, next) {
    console.log(`Request received:
        URL   : ${req.originalUrl}
        Method: ${req.method}
        Host  : ${req.hostname}
        IP    : ${req.ip}
        Params: ${JSON.stringify(req.params)}
        Query : ${JSON.stringify(req.query)}
        Body  : ${JSON.stringify(req.body)}
    `);
    next();
}

function responseLogger(req, res) {
    res.status(200).json({
        message: 'Request received successfully',
        details: {
            URL   : req.originalUrl,
            Method: req.method,
            Host  : req.hostname,
            IP    : req.ip,
            Params: req.params,
            Query : req.query,
            Body  : req.body
        }
    });
}

module.exports = {
    requestLogger,
    responseLogger
}