export default ( config ) => ( req, res, next  ) => {
    const errors = [];
    console.log('Inside ValidationHandler Middleware');
    // console.log( req.body );
    // console.log( req.query );
    // console.log(Object.keys( req.query ).length );
    const keys = Object.keys(config);
    keys.forEach((key) => {
        const obj = config[key];
        console.log('key is', key);
        const values = obj.in.map((val) => {
            return req[val][key];
        });
        // Checking for In i.e Body or Query
        if (Object.keys(req[obj.in]).length === 0) {
            errors.push({
                key: { key },
                location: obj.in,
                message: obj.errorMessage || `Values should be passed through ${obj.in}`,
            });
        }
        // Checking for required
        console.log('values is', values);
        if (obj.required) {
            if (isNull(values[0])) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} is required`,
                });
            }
        }
        // Checking for string
        if (obj.string) {
            if (!(typeof (values[0]) === 'string')) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be a String`,
                });
            }
        }
        // Checking for object
        if (obj.isObject) {
            if (!(typeof (values) === 'object')) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} Should be an object`,
                });
            }
        }
        // Checking for regex
        if (obj.regex) {
            const regex = obj.regex;
            if (!regex.test(values[0])) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key} is not valid expression`,
                });
            }
        }
        // Checking for default
        /* if (obj.default) {
            if (isNull(values[0])) {
                values[0] === obj.default;
            }
        }*/
        // Checking for number
        if (obj.number) {
            if (isNaN(values[0]) || values[0] === undefined) {
                errors.push({
                    key: { key },
                    location: obj.in,
                    message: obj.errorMessage || `${key}  must be an number`,
                });
            }
        }
    });
    if (errors.length > 0) {
        res.status(400).send({ errors });
    }
    else {
        next();
    }
};



function isNull(obj) {
    const a = (obj === undefined || obj === null);
    return a;
}