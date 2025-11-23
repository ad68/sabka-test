import { useAxiosWithToken } from '@/hooks';
import { useEffect, useState } from 'react'
import { UseCustomTable } from '../customTable.types';
import { objectToQueryString } from '@/utils';
import BASE_URL from '@/config/apiConfig';
const useCustomTable = ({ api, reload, queries, pageSize, listResponseObjectName, summary }: UseCustomTable) => {
    const [firstReload, setFirstReload] = useState(false)
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>();
    const [allResponse, setAllResponse] = useState<any[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedItem, setSelectedItem] = useState<Array<any>>([])
    const getList = (myCurrentPage: number = 1) => {
        setLoading(true);
        setFirstReload(true)
        useAxiosWithToken
            .get(BASE_URL + api + `?pageNumber=${myCurrentPage - 1}&pageSize=${pageSize ? pageSize : 10}${queries ? "&" + objectToQueryString(queries) : ""}`)
            .then((res) => {
                let response;
                if (listResponseObjectName) {
                    response = res.data.elements[0][listResponseObjectName]
                }
                if (summary) {
                    setAllResponse(res.data.elements[0])
                }
                else {
                    response = res.data.elements
                }

                if (myCurrentPage === 1) {
                    setCurrentPage(1);
                }
                if (response === null && myCurrentPage > 1) {
                    setCurrentPage(1);
                }
                setLoading(false);
                setData(response);
                setTotal(res.data?.totalElements);

            })
            .catch((error) => {
                console.log(error)
                setLoading(false);
            });
    };
    useEffect(() => {
        getList(currentPage);

    }, [currentPage]);

    useEffect(() => {
        if (firstReload) {
            if (currentPage > 1) {
                setCurrentPage(1)
            }
            else {
                getList()

            }

        }
        setSelectedItem([])
    }, [reload])
    const checkboxHandleChange = (checked: boolean, id: any) => {
        let arr = [...selectedItem]
        if (checked) {
            arr.push(id)
        }
        else {
            arr = arr.filter(el => el !== id)
        }
        setSelectedItem(arr)
    }
    useEffect(() => {
        console.log('selectedItem', selectedItem)
    }, [selectedItem])
    /* useEffect(() => {
        console.log('queries', queries)
        if (queries) {
            getList(1);
        }
    }, [queries]) */
    return {
        loading, total, data, allResponse, getList, currentPage, setCurrentPage, checkboxHandleChange, selectedItem
    }
}
export default useCustomTable