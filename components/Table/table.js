import Skeleton from 'react-loading-skeleton'
import RightArrowIcon from '../Icon/RightArrowIcon'
import LeftArrowIcon from '../Icon/LeftArrowIcon'
import React from 'react'
import { useFilters, useSortBy, usePagination, useTable } from 'react-table'
import { useRouter } from 'next/router'
import { FaEye } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import LogoutModal from '../../components/Table/logoutModal'
import { useState } from'react';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case PAGE_CHANGED:
//       return {
//         ...state,
//         queryPageIndex: action.payload,
//       }
//     case PAGE_SIZE_CHANGED:
//       return {
//         ...state,
//         queryPageSize: action.payload,
//       }
//     case TOTAL_COUNT_CHANGED:
//       return {
//         ...state,
//         totalCount: action.payload,
//       }
//     default:
//       throw new Error(`Unhandled action type: ${action.type}`)
//   }
// }

const Table = (props) => {
  const { data, loading, count, addHover, removeHover, tableIndex, index } = props
  const router = useRouter();

  const [logoutModal, setlogoutModalOpen] = useState(false);

  const openModal = () => {
    setlogoutModalOpen(true);
  };


  //   const [{ queryPageIndex, queryPageSize }, dispatch] = React.useReducer(reducer, initialState)


  const ActionCell = ({ row }) => (
    <>
      <div onClick={() => router.push(`/contact-us-detail/${row.original.id}`)} className='eyeicon-table'>
        <FaEye />
      </div>
    </>
  )

  const columns = React.useMemo(() => [
    { Header: 'ID', accessor: 'id', sort: false },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    { Header: 'Message', accessor: 'message' },
    { Header: 'Number', accessor: 'number' },
    { Header: 'Services', accessor: 'services' },
    { Header: 'Actions', accessor: 'mid', Cell: ActionCell },
  ], []);

  //   const columns = React.useMemo(() => setColumns(id, ActionCell, queryPageIndex, queryPageSize), [id, loading, queryId, globalLoading,queryPageIndex, queryPageSize])

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    state: { pageIndex },
    headerGroups,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,

  } = useTable(
    {
      columns,
      data,
      //   initialState: {
      //     pageIndex: queryPageIndex,
      //     pageSize: queryPageSize,
      //   },
      manualPagination: true,
      pageCount: Math.ceil(count / 15),
    },

    useFilters,
    useSortBy,
    usePagination
  )



  return (
    <>
    <LogoutModal
    LogoutModalOpen={logoutModal}
    LogouthandleCancel={() => setlogoutModalOpen(false)}
    />
      <div className="table_container main_table">
        <div className='logout-icon' onClick={()=>setlogoutModalOpen(true)}>
          <span><IoMdLogOut /></span>Logout
        </div>
        <table {...getTableProps()} style={{ color: 'white' }} className="bordered table">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="table_row">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} className="table_header">
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {!loading ? (
              rows.map((row, index) => {
                prepareRow(row)
                return (
                  <tr
                    className="table_row_body"
                    {...row.getRowProps()}
                    onMouseEnter={() => addHover(index)}
                    onMouseLeave={() => removeHover()}
                    style={{
                      background: `${index === tableIndex ? '#e1e1e152' : ''}`,
                    }}

                  >
                    {row.cells.map((cell, index) => (
                      <td {...cell.getCellProps()} className="table_data" key={index}>
                        {<div> {cell.render('Cell')} </div>}
                      </td>
                    ))}
                  </tr>
                )
              })
            ) : (
              <>
                {Array.from({ length: 15 - headerGroups.length }).map((_, index) => (
                  <tr key={index} className="table_data">
                    {Array.from({
                      length: 15 - headerGroups.length + 1,
                    }).map((_, index) => (
                      <td key={index}>
                        <Skeleton width={'100%'} height={20} />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>

        <div className="table_pagination">
          <div className="table_controls">
            <div className="control_item_box">
              <div onClick={() => previousPage()} className="control_items items_box">
                <LeftArrowIcon color={!canPreviousPage ? '#ced4da' : '#333533'} />
              </div>

              <div id="selected" className="control_items">
                {pageIndex + 1}
              </div>
              <div className="control_items">Of</div>

              <div className="control_items"> {pageOptions.length}</div>
              <div onClick={() => nextPage()} className="control_items items_box">
                <RightArrowIcon color={!canNextPage ? '#ced4da' : '#333533'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
