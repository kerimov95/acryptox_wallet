const auth = (req, res, next) => {

    if (!req.headers.authorization) {
        res.status(401).json({
            message: "Unauthorized"
        });
        return;
    }

    if (req.headers.authorization !== `Bearer ${process.env.TOKEN}`) {
        res.status(403).json({
            message: "Forbidden"
        });
        return;
    }

    next();
}

module.exports = auth;