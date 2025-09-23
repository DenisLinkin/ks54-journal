import supabase, { supabaseUrl } from "./supabase";

// Получение всех преподавателей
export async function getTeachers() {
  const { data, error } = await supabase.from("Teacher").select("*");

  if (error) {
    console.error(error);
    throw new Error("Ошибка получения данных о преподавателях");
  }

  return data;
}

// Удаление преподавателя
export async function deleteTeacher(id) {
  const { data, error } = await supabase.from("Teacher").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Ошибка удаления данных о преподавателе");
  }

  return data;
}
