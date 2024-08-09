import jwt from 'jsonwebtoken';

async function authToken(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

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

        req.userId = decoded?._id;
        next();
    });
}


export default authToken;
