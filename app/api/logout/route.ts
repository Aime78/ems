export async function GET () {
    const response =  new Response(null, { status: 200 })
    response.headers.append('Set-Cookie', `token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,)
    response.headers.append('Set-Cookie', `user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`,)
    
    return response
}