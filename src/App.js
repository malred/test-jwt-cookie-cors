import React from 'react'
import axios from 'axios'
const App = () => {
  return (
    <div>
      <button onClick={async () => {
        document.cookie = "Authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODUzNjMzMDgsInN1YiI6NX0.5Bzj7rHpghXqjAxmhlmZQr8XKlUDY-Eprvl7llMyRAY"
        let res = await axios.get("http://localhost:10101/v1/user/query?username=admin", {
          withCredentials: true
        })
        console.log(res.data);
      }}>send</button>
    </div >
  )
}

export default App