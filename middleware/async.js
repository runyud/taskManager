const asyncWrapper = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next);
        } catch (error) {
            // next sends to  the next middleware
            next(error);
        }
    };
};

module.exports = asyncWrapper;
