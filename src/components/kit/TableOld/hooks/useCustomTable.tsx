import { useAxiosWithToken } from '@/hooks';
import { useEffect, useState } from 'react'
import { UseCustomTable } from '../customTable.types';
import { objectToQueryString } from '@/utils';
import BASE_URL from "@/config/apiConfig";
const useCustomTable = ({ api, reload, queries, pageSize, listResponseObjectName }: UseCustomTable) => {
    const [firstReload, setFirstReload] = useState(false)
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>();
    const [total, setTotal] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState(1);
    const getList = (myCurrentPage: number = 1) => {
        setLoading(true);
        setFirstReload(true)
        useAxiosWithToken
            .get(BASE_URL + api + `?pageNumber=${myCurrentPage - 1}&pageSize=${pageSize ? pageSize : 10}${queries ? "&" + objectToQueryString(queries) : ""}`)
            .then((res) => {
                let response;
                /*  response = res.data.elements[0] */
                /* console.log('responsesssssssssssss', response) */
                if (listResponseObjectName) {
                    response = res.data.elements[0][listResponseObjectName]
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
                setTotal(2);

            });
    };
    useEffect(() => {
        getList(currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    }, [reload])
    /* useEffect(() => {
        console.log('queries', queries)
        if (queries) {
            getList(1);
        }
    }, [queries]) */
    return {
        loading, total, data, getList, currentPage, setCurrentPage
    }
}
export default useCustomTable