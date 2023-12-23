const util = require('util');

async function requestLogger(req, res, next) {
    const chalk = (await import('chalk')).default;

    const methodColor = (method) => {
        switch (method) {
            case 'POST':
                return chalk.yellowBright(method);
            case 'GET':
                return chalk.greenBright(method);
            case 'PATCH':
                return chalk.magentaBright(method);
            case 'PUT':
                return chalk.blueBright(method);
            case 'DELETE':
                return chalk.redBright(method);
            default:
                return chalk.gray(method);
        }
    };

    const now = new Date().toLocaleString();
    console.log('\n'); // Add space above
    console.log(chalk.green(`Request received : [${now}]`));
    console.log(chalk.gray(`  URL    : ${req.originalUrl}`));
    console.log(`  Method : ${methodColor(req.method)}`);
    console.log(chalk.yellow(`  Host   : ${req.hostname}`));
    console.log(chalk.green(`  IP     : ${req.ip}`));

    if (Object.keys(req.params).length) {
        console.log(chalk.blue('  Params :'), util.inspect(req.params, { depth: null }));
    }
    if (Object.keys(req.query).length) {
        console.log(chalk.blue('  Query  :'), util.inspect(req.query, { depth: null }));
    }
    if (Object.keys(req.body).length) {
        console.log(chalk.blue('  Body   : \n') + JSON.stringify(req.body, null, "\t"));
    }
    console.log('\n'); // Add space below

    next();
}




module.exports = {
    requestLogger
}