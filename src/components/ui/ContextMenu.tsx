"use client";

import * as React from "react";
import { ContextMenu } from "radix-ui";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  Users,
  Plus,
  LogOut,
  Cloud,
} from "lucide-react";

const ContextMenuDemo = () => {
  return (
    <ContextMenu.Portal>
      <ContextMenu.Content className="MenuContent z-50 min-w-[200px] cursor-default overflow-hidden rounded-lg border border-G2 bg-white p-1 shadow-optii">
        <ContextMenu.Label className="MenuLabel px-3 py-2 text-xs font-medium text-G3">
          My Account
        </ContextMenu.Label>

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <User className="h-4 w-4" />
          Profile Item
        </ContextMenu.Item>

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <CreditCard className="h-4 w-4" />
          Billing
        </ContextMenu.Item>

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <Settings className="h-4 w-4" />
          Settings
        </ContextMenu.Item>

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <Keyboard className="h-4 w-4" />
          Keyboard shortcuts
        </ContextMenu.Item>

        <ContextMenu.Separator className="MenuSeparator my-1 h-px bg-G2" />

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <Users className="h-4 w-4" />
          Team
        </ContextMenu.Item>

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <Plus className="h-4 w-4" />
          New team
        </ContextMenu.Item>

        <ContextMenu.Separator className="MenuSeparator my-1 h-px bg-G2" />

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <Cloud className="h-4 w-4" />
          API
        </ContextMenu.Item>

        <ContextMenu.Separator className="MenuSeparator my-1 h-px bg-G2" />

        <ContextMenu.Item className="MenuItem flex items-center gap-3 rounded-md px-3 py-2 text-sm text-G4 hover:bg-G1">
          <LogOut className="h-4 w-4" />
          Log out
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Portal>
  );
};

export default ContextMenuDemo;
