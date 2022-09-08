import React from "react";
import { useEffect, useState } from 'react';
import LoadingPage from "../components/loading-page";
import RealNotFoundPage from '../components/real-404';

const NotFoundPage = ({ location, history }) => {

  const [profileData, setProfileData] = useState({ loading: true });

  useEffect(() => {
    return getData();
  }, []);

  const getData = async () => {
    const first = location.pathname.split('/')[1];
    if (first.length == 11 || first.length == 34) {
      window.location.href = "https://app.uolia.com/#/?add=" + first;
    } else {
      setProfileData({ loading: false });
    }
  }

  return (
    <>
      {profileData.loading === true ? <LoadingPage /> : <RealNotFoundPage />}
    </>
  );
}

export default NotFoundPage
