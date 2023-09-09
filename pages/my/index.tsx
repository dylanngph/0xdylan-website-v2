import React, { Fragment, ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MyLayout from "@/components/pages/my/MyLayout";

const MyPage: NextPageWithLayout = () => {
  return <div>MyPage</div>;
};

MyPage.getLayout = function getLayout(page: ReactElement) {
  return <MyLayout>{page}</MyLayout>;
};

export default MyPage;
