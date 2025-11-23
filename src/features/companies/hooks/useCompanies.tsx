'use client'
import useFetchCompaniesQuery from './queries/useFetchCompanies'
import { useParams, useSearchParams } from 'next/navigation'
//
// ──────────────────────────────────────────────────────────────
//   :::::: B U S I N E S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────
//
const useCompanies = () => {
    const params = useParams()
    const searchParams = useSearchParams();
    const provinceName = searchParams.get('provinceName')
    // ─── Variable ────────────────────────────────────────────────────────────
    const { data, isFetching } = useFetchCompaniesQuery({ id: params.provinceId })

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    // ─── Output ─────────────────────────────────────────────────────────────────
    return {
        data,
        isFetching,
        provinceName
    }
}
export default useCompanies