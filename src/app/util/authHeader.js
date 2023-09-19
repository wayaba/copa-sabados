export default function getAuthHeader(session) {
  if (session && session.user && session.user.accessToken) {
    const { user } = session
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return {
      'Content-Type': 'application/json',
      'x-access-token': user.accessToken
    } // for Node.js Express back-end
  } else {
    return { 'Content-Type': 'application/json' }
  }
}
