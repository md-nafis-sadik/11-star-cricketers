import { auth, currentUser } from "@clerk/nextjs/server";

import type { UserRole } from "@/lib/types";

export async function getUserRole(): Promise<UserRole | null> {
  const user = await currentUser();
  const role = user?.publicMetadata?.role as UserRole | undefined;
  return role ?? null;
}

export async function requireRole(allowedRoles: UserRole[]) {
  const session = auth();
  if (!session.userId) {
    return { ok: false, status: 401 as const };
  }

  const role = await getUserRole();
  if (!role || !allowedRoles.includes(role)) {
    return { ok: false, status: 403 as const };
  }

  return { ok: true, role } as const;
}
