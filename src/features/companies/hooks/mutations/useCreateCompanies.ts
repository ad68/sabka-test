import { useMutation } from "@tanstack/react-query";

export function useCreateCompanies() {
  return useMutation({
    mutationFn: async (data: any) => {
      // TODO: implement create companies
      return data;
    },
  });
}