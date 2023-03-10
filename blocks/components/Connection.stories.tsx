import React from 'react';

import { Meta, StoryObj } from "@storybook/react";

import Connection from './Connection';
import { ConnectionStatus } from '@nstaldev/react-core'

export default {
  title: 'Connection',
  component: Connection,
  argTypes: {
  },
} as Meta;

type Story = StoryObj<typeof Connection>;

export const NotConnected: Story = {
  args: {
    command: 'the command',
    status: ConnectionStatus.NotConnected
  }
};

export const Connected: Story = {
  args: {
    command: 'the command',
    status: ConnectionStatus.Connected
  }
};

export const Error: Story = {
  args: {
    command: 'the command',
    status: ConnectionStatus.Error
  }
};
