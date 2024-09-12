import React, { useEffect } from "react";
import Table from "./table";
import axios from "axios";
import { useRouter } from "next/router";

const TableIndex = () => {
  const router=useRouter()
  const [tableIndex, setTableIndex] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const addHover = (index) => setTableIndex(index);
  const removeHover = () => setTableIndex(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return
    }
    else{
      const getContactData = async () => {
      try {
        const response = await axios.get("/api/contact-us/route", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setData(response.data.data);
      } catch (error) {
        if(error.response.status===401){
         router.push('/login');
        }
      }
    }
    getContactData();
    };
  }, []);

  return (
    <>
      {/* {!isLoading ? (
        <div className="table_box_container">
          <div className="table_header_box">
          </div>
          {
            data?.data?.data.length ? ( */}
      <Table
        data={data}
        loading={isLoading}
        count={data?.length}
        addHover={addHover}
        removeHover={removeHover}
        tableIndex={tableIndex}
        index={tableIndex}
      />
      {/* ) : (<><div className="data-not-found">No data found</div></>)}
        </div>
      ) : (
        <>Loading</>
      )} */}
    </>
  );
};

export default TableIndex;
