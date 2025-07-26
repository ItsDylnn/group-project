import React, { useState } from "react"
import Login from "./components/LoginPage"
import ChooseCar from "./components/ChooseCar"
import CarList from "./components/CarList"

function App() {
  const [user, setUser] = useState(null)
  const [selectedCar, setSelectedCar] = useState(null)

  return (
    <>
      {!user ? (
        <Login onLogin={(username) => setUser(username)} />
      ) : (
        <>
          <ChooseCar setSelectedCar={setSelectedCar} />
          <CarList />
        </>
      )}
    </>
  )
}

export default App
