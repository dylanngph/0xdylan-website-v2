import React, { ReactElement } from "react";
import MyLayout from "@/components/pages/my/MyLayout";

const MyProfile = () => {
  return <div>MyProfile</div>;
};

MyProfile.getLayout = function getLayout(page: ReactElement) {
  return <MyLayout>{page}</MyLayout>;
};

export default MyProfile;
