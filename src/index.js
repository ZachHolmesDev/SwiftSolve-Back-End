// bootup file

require('dotenv').config();
const {app, PORT, HOST} = require('./server')


app.listen(PORT, HOST, () => {
    console.log(`Server is running on ${HOST} port: ${PORT}`);
});