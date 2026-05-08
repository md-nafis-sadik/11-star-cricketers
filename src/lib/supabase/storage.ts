import { createClient } from "@supabase/supabase-js";

function createStorageClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error("Supabase storage credentials are not configured.");
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey);
}

export async function uploadPlayerImage(fileName: string, file: Buffer) {
  const supabase = createStorageClient();
  const { data, error } = await supabase.storage.from("player-images").upload(fileName, file, {
    contentType: "image/webp",
    upsert: true,
  });

  if (error) {
    throw error;
  }

  return data.path;
}

export async function uploadGalleryImage(fileName: string, file: Buffer) {
  const supabase = createStorageClient();
  const { data, error } = await supabase.storage.from("gallery-images").upload(fileName, file, {
    contentType: "image/webp",
    upsert: true,
  });

  if (error) {
    throw error;
  }

  return data.path;
}
