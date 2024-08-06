import jwt from 'jsonwebtoken';

async function authToken(req, res, next) {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Please log in",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    message: "Invalid token",
                    error: true,
                    success: false
                });
            }

            if (!req.user) {
                req.user = {};
            }
            req.userId = decoded?._id;

            next();
        });

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false
        });
    }
}

export default authToken;
