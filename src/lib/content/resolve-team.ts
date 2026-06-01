import { labImage } from '@/lib/media';
import type { z } from 'zod';
import type { alumniMemberSchema, teamMemberSchema } from '@/lib/content/schemas';

type TeamMemberRaw = z.infer<typeof teamMemberSchema>;
type AlumniMemberRaw = z.infer<typeof alumniMemberSchema>;

export function resolveTeamMember(raw: TeamMemberRaw) {
  return {
    ...raw,
    avatarUrl: labImage(raw.avatar),
  };
}

export function resolveAlumniMember(raw: AlumniMemberRaw) {
  return {
    ...raw,
    avatarUrl: labImage(raw.avatar),
  };
}
