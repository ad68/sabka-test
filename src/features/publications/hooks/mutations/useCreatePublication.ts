import { useMutation } from "@tanstack/react-query";

export function useCreatePublication() {
  return useMutation({
    mutationFn: async (data: any) => {
      // TODO: implement create publication
      return data;
    },
  });
}