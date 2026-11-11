import { db } from '@/lib/db'

import { BadComponent } from '@/components/layout/bad-sidebar'

export default async function BadPage() {
  const users = await db.query.users.findMany()

  return <BadComponent />
}
