import jwt from 'jsonwebtoken'

export const getDataFromToken = (request: Request) => {

    try {
        // Retrieve the token from the cookies
        const token = request.headers.getSetCookie()[0].split("=")[1];
        // const token = request.cookies.get("token")?.value || '';

        // Verify and decode the token using the secret key
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);

        // Return the user ID from the decoded token
        return decodedToken.id;

    } catch (error: any) {
        throw new Error(error.message)
        
    }
}