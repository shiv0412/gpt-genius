"use client";
import { saveUserDetails } from "@/utils/redux/actions/actions";
import { useEffect } from "react";
import { connect } from "react-redux";

interface ISaveUser {
  userEmail: string;
  saveUserDetails: (userId: string) => void;
}

const SaveUser = ({ userEmail, saveUserDetails }: ISaveUser) => {
  useEffect(() => {
    saveUserDetails(userEmail ? userEmail : "");
  }, [userEmail]);

  return <></>;
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveUserDetails: (userId: string) => {
      dispatch(saveUserDetails(userId));
    },
  };
};

export default connect(null, mapDispatchToProps)(SaveUser);
