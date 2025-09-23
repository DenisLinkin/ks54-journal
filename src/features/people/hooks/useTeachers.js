import { useQuery } from "@tanstack/react-query";
import { getTeachers } from "../../../services/apiPeople";

export function useTeachers() {
  const {
    isPending,
    data: teachers,
    error,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachers,
  });

  return { isPending, teachers, error };
}
