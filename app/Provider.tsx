'use client'

import { getClerkUsers } from '@/lib/actions/user.actions';
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react/suspense';

function Provider({children}: {children: React.ReactNode}) {
  return (
    <LiveblocksProvider 
    // publicApiKey={"pk_dev_U8P41dmEzzINZT9t5AdelcASqW5oQJmg9hJMqk0HXi_ontl0Y-k_OHlWJiNc-tC0"}
    authEndpoint="/api/liveblocks-auth"
    resolveUsers={async ({userIds}) => {
      const users = await getClerkUsers({userIds});

      return users;
    }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {children}
      </ClientSideSuspense>
  </LiveblocksProvider>  )
}

export default Provider


