import React,{useState,useEffect} from "react";

let ContactAppFun = () => {
  let [contact, setContact] = useState({
    contacts: [],
    selectedContact: {},
  });
  useEffect(()=>{},[])
  useEffect(() => {
    Axios.get(url)
      .then((response) => {
        setContact({ ...contact, contacts: response.data });
      })
      .catch(() => {});
  }, []);
  return <div></div>;
};

export default ContactAppFun;
