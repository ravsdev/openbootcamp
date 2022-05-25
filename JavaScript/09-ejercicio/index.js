const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
  ],
});

function lanzaError(){
    throw new Error("Mensaje de error personalizado.");
}

try{
    lanzaError();
}catch(err){
    // logger.error(err.message);
    logger.error(err.toString());
}