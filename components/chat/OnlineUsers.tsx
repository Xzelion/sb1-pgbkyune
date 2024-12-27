"use client";

import { Users } from 'lucide-react';
import { ChatUser } from '@/lib/types';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

interface OnlineUsersProps {
  users: ChatUser[];
}

export default function OnlineUsers({ users }: OnlineUsersProps) {
  return (
    <div className="w-64 border-r border-border bg-card/95 hidden md:flex md:flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-foreground">
          <Users className="h-5 w-5 text-primary" />
          Online Users ({users.length})
        </h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-3 py-2">
              <div className="relative">
                <Avatar className="h-8 w-8">
                  <div className="bg-primary text-primary-foreground rounded-full h-full w-full flex items-center justify-center text-sm font-medium">
                    {user.nickname[0]?.toUpperCase() || '?'}
                  </div>
                </Avatar>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-background" />
              </div>
              <span className="text-sm font-medium text-foreground">
                {user.nickname}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}