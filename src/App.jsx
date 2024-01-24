import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from './Components/Onboarding/Login'
import SignUp from "./Components/Onboarding/signUp"
import Attendance from './Components/MemberAttendance/Attendance'
import Payment from './Components/ViewPayment/Viewpayment'
import Landingpage from './Components/LandingPage/Landingpage'
import HomePage from './Components/HomePage/HomePage'
import Churchpayment from './Components/Offering/Offering'
import ViewAttendance from './Components/View Attendance/ViewAtteandance'
import PayOfferingAuth from './Components/PayofferingAuth'
import TakeAttendance from './Components/TakeAttendance'
import ViewpaymentAuth from './Components/ViewPayment/ViewpaymentAuth'
import ManageMember from './Components/ManageMember/ManageMem'
import ManageMembersAuth from './Components/ManagemembersAuth'
// import Error from './Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landingpage />
  },
  {
    path: "/",
    element: <PayOfferingAuth />,
    children: [
      {
        path: '/pay',
        element: <Payment />
      },
      {
        path: '/home',
        element: <HomePage/>
      },
    ]
  },
  {
    path: "/",
    element: <TakeAttendance />,
    children: [
      {
        path: "/attend",
        element: <Attendance />
      },
      {
        path: '/viewattend',
        element: <ViewAttendance />
      }
    ]
  },
  {
    path: "/",
    element: <ViewpaymentAuth />,
    children: [
      {
        path: '/offering',
        element: <Churchpayment />
      },
    ]
  },
  {
    path: "/",
    element: <ManageMembersAuth />,
    children: [
      {
        path: "/manage",
        element: <ManageMember />
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <LogIn/>
  },

  
  
  // {
  //   path: "/error",
  //   element: <Error />
  // }


])

function App() {


  return (
    <>
      <RouterProvider router={router} />
      {/* <h1>hello</h1> */}
    </>
  )
}

export default App