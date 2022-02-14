import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import { initGA, trackingPageGA } from "./analytics"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const UseGoogleAnalytics = () => {
  const location = useLocation()
  const hasCookie = cookies.get('Domicilier')
  useEffect(() => {
    if(hasCookie && hasCookie == "on"){
      const currentPath = location.pathname + location.search;
      initGA();
      trackingPageGA(currentPath)
    }
  }, [hasCookie, location])

  return (
    <></>
  )
}
export default UseGoogleAnalytics;
